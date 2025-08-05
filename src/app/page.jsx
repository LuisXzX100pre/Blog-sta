import { redirect } from "next/navigation"

export default function HomePage() {
  // Redirigir a la página de español por defecto
  redirect("/es")
}
