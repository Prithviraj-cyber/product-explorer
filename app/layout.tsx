import "./globals.css"
import "../styles/custom.css"
import Link from "next/link"
import DarkModeToggle from "@/components/DarkModeToggle"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      >
        {/* Header */}
        <header className="border-b bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">

            {/* Home button */}
            <Link href="/" className="font-bold text-lg btn">
              Product Explorer
            </Link>

            {/* Dark mode toggle */}
            <DarkModeToggle />
          </div>
        </header>

        {/* Main content */}
        <main>{children}</main>
      </body>
    </html>
  )
}
