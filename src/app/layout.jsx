import { inter } from "@app/fonts";
import { Header } from '@app/components';
import { Providers } from "@app/contexts";
import "./globals.css";


export const metadata = {
  title: "Productos Dau",
  description: "Despliegue de nuestros productos en dau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
