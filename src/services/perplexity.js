import axios from "axios";

export async function askPerplexity(prompt) {
  const response = await axios.post(
    "https://api.perplexity.ai/chat/completions",
    {
      model: "sonar-medium-chat",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  );

  return JSON.parse(response.data.choices[0].message.content);
}
