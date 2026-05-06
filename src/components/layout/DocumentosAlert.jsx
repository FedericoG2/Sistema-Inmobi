import Card from 'react-bootstrap/Card'
import { CalendarDays, RefreshCw } from 'lucide-react'

export function DocumentosAlerta(){
    
    return (
            <>
            
            <Card 
      className="border-0 shadow-sm text-white mb-4" 
      style={{ 
        background: 'linear-gradient(90deg, #0052D4, #0046af)', 
        borderRadius: '15px' 
      }}
    >
      <Card.Body className="p-4 d-flex align-items-center justify-content-between">
        
        {/* Lado Izquierdo: Icono y Fechas */}
        <div className="d-flex align-items-center">
          <div 
            className="d-flex align-items-center justify-content-center rounded-3 me-3"
            style={{ 
              width: '55px', 
              height: '55px', 
              backgroundColor: 'rgba(255, 255, 255, 0.2)' 
            }}
          >
            <CalendarDays size={25} />
          </div>
          
          <div>
            <div className="fw-medium opacity-75" style={{ fontSize: '0.9rem' }}>
              Resumen de Contrato
            </div>
            <h3 className="mb-0 fw-bold">15 Abr 2026 - 14 Abr 2028</h3>
          </div>
        </div>

        {/* Lado Derecho: Badge de renovación */}
        <div 
          className="px-3 py-2 rounded-pill d-flex align-items-center border border-white border-opacity-25"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', cursor: 'default' }}
        >
          <RefreshCw className="me-2" size={18} />
          <span>Próxima renovación en 18 meses</span>
        </div>

      </Card.Body>
    </Card>
    </>
  );
}

