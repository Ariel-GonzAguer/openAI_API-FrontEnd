import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export default async function generateText(input) {
  try {
    const client = new OpenAI();

    const response = await client.responses.create({
      model: "gpt-3.5-turbo",
      input,
    });

    return response.output_text;

  } catch (error) {
    console.error("Error:", error);
  }

}

