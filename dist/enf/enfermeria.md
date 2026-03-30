Sistema de Gestión para Clínica de Enfermería
Descripción breve :
Sistema integral para gestionar una clínica de enfermería con dos módulos especializados: uno touch para enfermeros en tablets (sin login inicial) y un panel administrativo web para gestión del negocio.
---
Para quién es
- Clínicas de enfermería que necesitan digitalizar sus procedimientos
- Servicios de enfermería a domicilio
- Consultorios de enfermería
---
Módulo Enfermero (Tablet)
- Búsqueda de pacientes por DNI o nombre (resultados instantáneos)
- Registro rápido de nuevos pacientes
- Historial completo de procedimientos por paciente
- Registro de procedimientos con:
  - Selección de múltiples servicios (inyecciones, curaciones, extracciones, etc.)
  - Control de stock de descartables (se descuenta automáticamente)
  - Descuentos por obra social (ej: 20%)
  - Reconciliación de pago (efectivo/Mercado Pago)
- Validación de código de enfermero al confirmar (autenticación al final del flujo)
---
Módulo Administrativo (Web)
- Dashboard con métricas en tiempo real
- Gestión de enfermeros (códigos únicos)
- Catálogo de servicios y precios
- Control de inventario de descartables
- Alertas de stock bajo/crítico
---
Tecnologías
- Backend: Go + Gin + PostgreSQL
- Frontend: React + Vite (tablet-optimized)
- UI: Touch-first con botones mínimos de 50x50px
