import { useEffect, useState } from 'react'

export default function About() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('sobre-mi')
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="sobre-mi" className="py-24 px-6 md:px-12 lg:px-24 bg-[#111111]">
      <div className={`max-w-3xl transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-sm font-semibold tracking-wider uppercase text-[#6B7280] mb-4">
          Sobre nosotros
        </h2>
        
        <p className="text-xl md:text-2xl text-[#EAEAEA] leading-relaxed mb-10">
          Creamos soluciones que van más allá de lo superficial, 
          construyendo cimientos sólidos que permiten a las empresas crecer sin límites técnicos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-2">
          <div className="group p-4 rounded-xl border border-[#222222] hover:border-[#3ECF8E] hover:bg-[#1A1A1A] transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center mb-4 group-hover:bg-[#3ECF8E] transition-colors duration-200">
              <svg className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#EAEAEA] mb-2">Backend First</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              APIs RESTful, microservicios y arquitecturas clean que garantizan rendimiento y mantenibilidad.
            </p>
          </div>
          <div className="group p-4 rounded-xl border border-[#222222] hover:border-[#3ECF8E] hover:bg-[#1A1A1A] transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center mb-4 group-hover:bg-[#3ECF8E] transition-colors duration-200">
              <svg className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#EAEAEA] mb-2">Escalabilidad</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              Sistemas diseñados para crecer. Arquitectura que se adapta al aumento de usuarios y datos.
            </p>
          </div>
          <div className="group p-4 rounded-xl border border-[#222222] hover:border-[#3ECF8E] hover:bg-[#1A1A1A] transition-all duration-200">
            <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center mb-4 group-hover:bg-[#3ECF8E] transition-colors duration-200">
              <svg className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="font-semibold text-[#EAEAEA] mb-2">A Medida</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              Soluciones personalizadas que se ajustan exactamente a tus necesidades, sin compromisos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
