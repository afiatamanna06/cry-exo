import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>CryExo</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="A crypto trading platform" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
