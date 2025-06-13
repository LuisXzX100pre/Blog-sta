import { Container } from "../components/general/Container"
import TemplateCards from "../components/general/TemplateCards"

export default function TemplateSelectionLayout() {
  return (
    <Container>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Blog de Viajes</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
         Seleciona el template adecuado para la informacion adecuada.
        </p>
        <TemplateCards />
      </div>
    </Container>
  )
}
