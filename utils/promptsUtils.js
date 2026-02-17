
export function createParkingSuggestionPrompt(userInput) {
  return `
Return ONLY valid JSON.
No markdown.
No explanation.

{
  "intent": "create_reservation | list_parkings",
  "parkingName": string | null,
  "start": string | null,
  "end": string | null
}

User input:
"${userInput}"
`
}
