import './styles/globals.css'
import localFont from 'next/font/local'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'



const excon = localFont({
    variable: '--font-headings',
    src: [
      {
        path: './fonts/Excon-Black.woff2',
        weight: '900',
        style: 'normal',
      }
    ],
    
  })

  const generalsans = localFont({
    variable: '--font-body',
    src: [
      {
        
        path: './fonts/GeneralSans-Medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: './fonts/GeneralSans-Bold.woff2',
        weight: '700',
        style: 'italic',
      }
    ],
    
  })

export const metadata = {
  title: 'Cloud-Native Conference 2023',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${excon.variable} ${generalsans.variable}  `}>
        <Nav />
        {children}
        <Footer />

      </body>
    </html>
  )
}