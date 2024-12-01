"use server"
import { GraphQLClientSingleton } from "app/graphql"
import { createUserMutation } from "app/graphql/mutations/createUserMutation"
import { createAccessToken } from "app/utils/auth/createAccessToken"
import { redirect } from "next/navigation"
import { validateAccessToken } from "app/utils/auth/validateAccessToken"
import { cookies } from "next/headers"
import { createCartMutation } from "app/graphql/mutations/createCartMutation"


interface CreateUserResponse { 
    customerCreate: {
        customer: { 
            id: string;
            name: string;
            firstName: string;
            email: string;
        };
    };
}

// Define the response type for creating a cart
interface CreateCartResponse {
    cartCreate?: {
        cart?: {
            checkoutUrl: string;
        };
    };
}

export const handleCreateUser = async (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData)
    delete formDataObject["password_confirmation"]
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const variables = {
        input: {
        ...formDataObject,
        phone: '+57' + formDataObject.phone
        }
    }

    try {
        const { customerCreate } = await graphqlClient.request<CreateUserResponse>(createUserMutation, variables);
        const { customer } = customerCreate
        if(customer?.firstName){
            try {
                await createAccessToken(formDataObject.email as string, formDataObject.password as string);
                redirect('/');
            } catch (error) {
                console.error('Error creating access token:', error)
            }
        }
    } catch (error) {
        console.error('Error creating user:', error)
    }
}

export const handleLogin = async (formData: FormData) => {
    try {
        const formDataObject = Object.fromEntries(formData);
        const accessToken = await createAccessToken(formDataObject.email as string, formDataObject.password as string);
        if(accessToken){
            redirect('/store')
        }

    } catch (error) {
        console.error('Error during login:', error)
        redirect('/signup')
    }
}

export const handleCreateCart = async (items: CartItem[]) => {
    try {
        const cookiesStore = cookies()
        const accesToken = cookiesStore.get('accessToken')?.value as string
    
        if(!accesToken) redirect('/login')
    
        const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
        const customer = await validateAccessToken()
        const variables = {
        input: {
            buyerIdentity: {
            customerAccessToken: accesToken,
            email: customer?.email
            },
            lines: items.map(item => ({
            merchandiseId: item.merchandiseId,
            quantity: item.quantity
            }))
        }
        }
    
        const { cartCreate }: {
        cartCreate?: {
            cart?: {
            checkoutUrl: string
            }
        }
        } = await graphqlClient.request(createCartMutation, variables)
    
        return cartCreate?.cart?.checkoutUrl
    } catch (error) {
        console.error('Error creating cart:', error)
    }
}
