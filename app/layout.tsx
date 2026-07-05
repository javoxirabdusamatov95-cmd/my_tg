import { Metadata } from 'next'
import './globals.css'
import { Geist_Mono, Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'ChatMe',
  description: 'A simple chat app built with Next.js and Typescript',
}

type RootLayoutProps = {
    children: React.ReactNode
}


function Layout( {children }: RootLayoutProps ) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${inter.className} ${geistMono.className}`}>
    <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  )
  
}

export default Layout
    


