import { inter, poppins } from "@app/fonts";
import { Header } from '@app/components'
import "./globals.css";



export const metadata = {
  title: "Productos Dau",
  description: "Despliegue de nuestros productos en dau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  ${poppins.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
