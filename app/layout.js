
import './globals.css'

export const metadata = {
  title: 'Parking MVP',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen p-10">
        {children}
      </body>
    </html>
  )
}
