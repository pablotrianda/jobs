import { useEffect, useState } from 'react'

export default function Contact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contacto')
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
    <section id="contacto" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B]">
      <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-sm font-semibold tracking-wider uppercase text-[#6B7280] mb-4">
          Contacto
        </h2>
        
        <p className="text-2xl md:text-3xl font-bold text-[#EAEAEA] mb-6 max-w-2xl">
          ¿Tenés un proyecto en mente? Hablemos.
        </p>
        
        <p className="text-[#A1A1AA] mb-8 max-w-xl">
          Estamos disponibles para discutir soluciones personalizadas para tu negocio. 
          Escribinos y responderemos a la brevedad.
        </p>

        <a 
          href="mailto:pablotrianda@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-[#0B0B0B] bg-[#3ECF8E] rounded-full hover:bg-[#34B67A] transition-all duration-200 hover:scale-105"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contáctanos
        </a>

        <footer className="mt-20 pt-8 border-t border-[#1F1F1F]">
          <p className="text-sm text-[#6B7280]">
            © 2024 Kerux. Desarrollo de software a medida.
          </p>
        </footer>
      </div>
    </section>
  )
}
