import { Header, Footer } from '@app/components';
import { ProvidersContainer } from "@app/contexts";
import { inter } from "@app/fonts";
import "./globals.css";


export const metadata = {
  title: "Productos Dau",
  description: "Despliegue de nuestros productos en dau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ProvidersContainer>
          <Header />
          {children}
          <Footer />
        </ProvidersContainer>
      </body>
    </html>
  );
}
