import './globals.css'

export const metadata = {
  title: 'CryExo',
  description: 'A crypto trading platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
