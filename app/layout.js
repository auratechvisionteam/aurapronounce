export const metadata = {
  title: 'AuraPronounce - Medical Pronunciation Guide',
  description: 'Master medical terminology pronunciation with audio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
