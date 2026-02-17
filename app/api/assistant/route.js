
import { createParkingSuggestionPrompt } from "@/utils/promptsUtils.js"

export async function POST(req) {
  const { message } = await req.json()

  const prompt = createParkingSuggestionPrompt(message)

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  })

  const data = await response.json()
  const content = data.choices?.[0]?.message?.content

  return Response.json(JSON.parse(content))
}
