
let reservations = []

export async function POST(req) {
  const body = await req.json()
  reservations.push(body)
  return Response.json({ success: true, reservations })
}
