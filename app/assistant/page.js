
"use client"
import { useState } from "react"

export default function Assistant() {
  const [message, setMessage] = useState("")
  const [response, setResponse] = useState(null)

  const send = async () => {
    const res = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    })
    const data = await res.json()
    setResponse(data)
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">AI Parking Assistant</h2>
      <input
        className="w-full border p-2 rounded mb-4"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Book parking tomorrow 10am to 12pm"
      />
      <button
        onClick={send}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Send
      </button>

      {response && (
        <pre className="mt-4 bg-gray-100 p-3 rounded text-sm">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}
    </div>
  )
}
