import { useEffect, useState } from 'react'

const steps = [
  {
    number: '01',
    title: 'Enfoque MVP',
    description: 'Comenzamos con lo esencial. Entregamos funcionalidades core rápidamente para validar tu idea con usuarios reales.'
  },
  {
    number: '02',
    title: 'Desarrollo Iterativo',
    description: 'Mejoras continuas basadas en feedback. Cada iteration agrega valor y refina la experiencia.'
  },
  {
    number: '03',
    title: 'Arquitectura Escalable',
    description: 'Desde el día uno, construimos sobre cimientos sólidos que permiten crecer sin reinventar el sistema.'
  }
]

export default function Process() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('proceso')
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
    <section id="proceso" className="py-32 px-6 md:px-12 lg:px-24 bg-[#111111] border-t border-[#1A1A1A]">
      <div className={`transition-all duration-700 mb-20 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-sm font-semibold tracking-wider uppercase text-[#6B7280] mb-5">
          Forma de trabajo
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-[#EAEAEA] max-w-2xl">
          Metodología diseñada para resultados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={`relative p-8 rounded-xl border border-[#222222] hover:border-[#3ECF8E]/50 bg-[#0B0B0B] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="absolute top-4 right-6 text-8xl font-bold text-[#1A1A1A] opacity-30 pointer-events-none select-none">
              {step.number}
            </span>
            <div className="relative">
              <h3 className="text-xl font-semibold text-[#EAEAEA] mb-4">
                {step.title}
              </h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
