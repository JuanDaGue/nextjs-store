import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAI } from 'openai';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // Ensure this is set in your .env file
});

// Define the edge runtime
export const runtime = 'edge';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { messages } = req.body; // Expecting messages from the frontend

      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages,
      });

      // Send the response back to the client
      res.status(200).json(completion.choices[0].message);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unknown error occurred" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
