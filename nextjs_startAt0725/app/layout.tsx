
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata : Metadata = {
  title: {
    template : "%s | Next Movies",
    default : "Loading... "
  },
  description : 'Next Movies is the best site for movies',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
