import { LanguageProvider } from "../context/LanguageContext"
import Navigation from "../components/navigation/navigation"
import FooterT from "../components/footer/FooterT"
import ScrollToTop from "../components/general/ScrollToTop"
import "./globals.css"

export const metadata = {
  title: "Royal Vacations - Blog de Viajes",
  description: "Descubre los mejores destinos de México con nuestras guías de viaje",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <Navigation />
          <ScrollToTop />
          {children}
          <FooterT />
        </LanguageProvider>
      </body>
    </html>
  )
}
