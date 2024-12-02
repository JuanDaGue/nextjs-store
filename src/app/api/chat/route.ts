import { OpenAI } from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // Ensure this is set in your .env file
});

// Define the edge runtime
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json(); // Expecting messages from the frontend

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
    });

    // Return the response
    return new Response(JSON.stringify(completion.choices[0].message), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
