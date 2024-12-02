import { GraphQLClientSingleton } from 'app/graphql'
import { customerName } from 'app/graphql/queries/customerName'
import { cookies } from 'next/headers'

interface CustomerResponse {
    customer: {
        id: string;
        name: string;
        email: string;
        // Add other fields as necessary
    };
}

export const validateAccessToken = async (): Promise<CustomerResponse['customer'] | null> => {
    try {
        const cookieStore = cookies();
        const accessToken = cookieStore.get('accessToken')?.value;
        const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
        const response: CustomerResponse = await graphqlClient.request(customerName, {
            customerAccessToken: accessToken,
        });
        return response.customer;
    } catch (error) {
        console.log(error);
        return null;
    }
};
