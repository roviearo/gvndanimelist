import { Gabarito, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'GVND Anime List',
  description: 'Animelist by GVND',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
