
import link from 'next/link'
import { MdDescription } from 'react-icons/md'
import Wraper from './compnents'
import './globals.css'
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" /> */ }

export const metadata = {
  title: "PanaverseAnas",
  description: "Anas Web"
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (

    <html lang="en">
      <body className="scrollbar-thin scrollbar-track-Anas-400 scrollbar-thumb-blue-800 ">
        <Wraper>
          {children}
        </Wraper>
      </body>
    </html>
  )
}
