import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY, // Ensure this is set in your .env file
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { messages } = req.body; // Expecting messages from the frontend

      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        model: "gpt-4",
        messages,
      });

      // Send the response back to the client
      res.status(200).json(completion.choices[0].message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
