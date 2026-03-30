CENI-HC - Sistema de Gestión para Centro de Neurología Infantil
CENI-HC es una aplicación web completa para la gestión integral de un centro médico de neurología infantil. Permite administrar pacientes, consultas médicas, turnos, obras sociales, certificados de discapacidad y mensajería interna entre profesionales de la salud.
El sistema cuenta con dos módulos principales: uno administrativo para la gestión de pacientes, agenda médica y configuración del sistema; y otro para profesionales de la salud donde pueden crear consultas, generar recetas médicas automáticas con firma digital, y visualizar el historial clínico de sus pacientes.
Tecnologías utilizadas
- Backend: Go (Gin) con PostgreSQL, siguiendo arquitectura Clean Architecture
- Frontend: React con Tailwind CSS, patrón de componentes reutilizables
- Características adicionales: Autenticación JWT, API REST, mensajería en tiempo real con WebSocket, generación de imágenes (recetas médicas), uploads de archivos
---
Screenshots sugeridos para capturar
1. Dashboard Admin - Estadísticas del centro (pacientes, consultas del día, etc.)
2. Listado de Pacientes - Tabla con filtros y búsqueda
3. Formulario de Paciente - Datos personales, obra social, número de afiliado
4. Historial del Paciente - Vista completa con consultas, turnos, recetas
5. Crear Consulta - Formulario de evolución médica
6. Turnos/Calendario - Gestión de agenda médica
7. Recetario - Generación de recetas con datos del paciente y diagnóstico
8. Mensajería - Chat interno entre profesionales
