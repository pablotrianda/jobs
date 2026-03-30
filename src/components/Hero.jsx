import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 relative overflow-hidden">
      <div 
        className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-widest uppercase bg-[#1A1A1A] text-[#A1A1AA] rounded-full mb-10">
          Kerux
        </span>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#EAEAEA] mb-10 max-w-4xl leading-[1.1]">
          Desarrollo de software a medida
        </h1>
        
        <p className="text-xl md:text-2xl text-[#A1A1AA] max-w-2xl mb-14 leading-relaxed font-light">
          Desarrollamos sistemas a medida que escalan con tu negocio.
          <br className="hidden md:block" />
          Transformamos procesos complejos en soluciones simples y eficientes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#proyectos"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#0B0B0B] bg-[#3ECF8E] rounded-full hover:bg-[#34B67A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3ECF8E]/20 tracking-wide"
          >
            Ver proyectos
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="mailto:pablotrianda@gmail.com"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-[#EAEAEA] bg-[#1A1A1A] border border-[#222222] rounded-full hover:border-[#3ECF8E] hover:text-[#3ECF8E] transition-all duration-300 hover:-translate-y-0.5 tracking-wide"
          >
            Contáctanos
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-[#222222] flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#3ECF8E] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
