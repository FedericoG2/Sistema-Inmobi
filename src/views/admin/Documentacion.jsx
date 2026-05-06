import { DocumentosAlerta } from "../../components/layout/DocumentosAlert"
import { CardDocumentacion } from "../../components/layout/CardDocumentacion"
import { ListadoReclamos } from "../../components/layout/ListadoReclamos"


export function Documentacion() {
  return (
    <>
      <h1 className="h3 mb-3">Documentación</h1>
      <p className="text-muted">Contratos, anexos y archivos legales.</p>
      <DocumentosAlerta/>
      <hr />
      <CardDocumentacion  />
      <hr />
      <ListadoReclamos/>
    </>
  )
}

