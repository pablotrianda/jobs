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
    <section id="proceso" className="py-24 px-6 md:px-12 lg:px-24 bg-[#111111]">
      <div className={`transition-all duration-700 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-sm font-semibold tracking-wider uppercase text-[#6B7280] mb-4">
          Forma de trabajo
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-[#EAEAEA] max-w-2xl">
          Metodología diseñada para resultados
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={step.number}
            className={`p-6 rounded-xl border border-[#222222] hover:border-[#3ECF8E] bg-[#0B0B0B] transition-all duration-200 hover:translate-y-[-2px] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="text-5xl font-bold text-[#222222] mb-4 block">
              {step.number}
            </span>
            <h3 className="text-xl font-semibold text-[#EAEAEA] mb-3">
              {step.title}
            </h3>
            <p className="text-[#A1A1AA] leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
