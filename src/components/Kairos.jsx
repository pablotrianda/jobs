import { useEffect, useState } from 'react'
import ImageCarousel from './ImageCarousel'

const kairosImages = [
  '/kairos/imgs/Screenshot 2026-03-30 at 17.34.11.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.34.51.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.34.58.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.35.34.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.35.45.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.35.59.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.36.10.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.36.22.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.36.40.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.36.47.png',
  '/kairos/imgs/Screenshot 2026-03-30 at 17.37.02.png',
]

const features = [
  'Agenda pública online 24/7',
  'Gestión de pacientes e historias clínicas',
  'Multiclínica: una cuenta, varios profesionales',
  'Panel de administración con estadísticas',
  'Emails automáticos y notificaciones',
]

export default function Kairos() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('kairos')
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
    <section id="kairos" className="py-32 px-6 md:px-12 lg:px-24 bg-[#111111] border-t border-[#1A1A1A]">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-sm font-semibold tracking-wider uppercase text-[#6B7280]">
            Producto
          </h2>
          <span className="px-3 py-1 text-xs font-medium bg-[#3ECF8E]/10 text-[#3ECF8E] rounded-full">
            Próximo lanzamiento
          </span>
        </div>

        <p className="text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-6 max-w-2xl">
          La gestión de tu consultorio, simplificada
        </p>

        <p className="text-xl text-[#A1A1AA] mb-12 max-w-2xl leading-relaxed">
          Kairos es una plataforma SaaS de gestión médica que permite a consultorios 
          y clínicas gestionar turnos, pacientes e historias clínicas de forma eficiente.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="bg-[#0B0B0B] rounded-xl p-8 border border-[#222222] hover:border-[#3ECF8E]/50 hover:bg-[#1A1A1A] transition-all duration-300">
              <div className="mb-8">
                <ImageCarousel images={kairosImages} />
              </div>

              <div className="space-y-4">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-2 flex-shrink-0" />
                    <span className="text-[#A1A1AA] text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#1F1F1F]">
                <span className="text-xs text-[#6B7280] uppercase tracking-wider">
                  Stack: React • Node.js • PostgreSQL
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:sticky lg:top-32">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">
                  ¿Para quién es?
                </h3>
                <ul className="space-y-3">
                  {['Consultorios individuales', 'Clínicas medianas', 'Redes de salud'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#A1A1AA]">
                      <span className="w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#EAEAEA] mb-4">
                  Beneficios clave
                </h3>
                <ul className="space-y-3">
                  {['Menos faltantes con recordatorios', 'Más pacientes con agenda 24/7', 'Imagen profesional'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[#A1A1AA]">
                      <span className="w-5 h-5 rounded-full bg-[#1A1A1A] flex items-center justify-center">
                        <svg className="w-3 h-3 text-[#3ECF8E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="https://kairo-landing-brown.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#EAEAEA] bg-[#1A1A1A] border border-[#222222] rounded-full hover:border-[#3ECF8E] hover:text-[#3ECF8E] transition-all duration-300 hover:-translate-y-0.5"
              >
                Ver más
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
