import { DocumentosAlerta } from "../../components/layout/DocumentosAlert"
import { CardDocumentacion } from "../../components/layout/CardDocumentacion"
import { Documentos } from "../../components/layout/Documentos"
import '../../components/layout/DocumentosStyle.css';


export function Documentacion() {
  return (
    <>
      <h1 className="h3 mb-3">Documentación</h1>
      <p className="text-muted">Contratos, anexos y archivos legales.</p>
      <DocumentosAlerta/>
      <div className="documentos-cards">
      <CardDocumentacion/>
      <Documentos/>
      </div>
      
    </>
  )
}

