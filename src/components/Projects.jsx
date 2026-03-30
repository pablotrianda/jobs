import { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'

export default function Projects({ projects }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('proyectos')
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
    <section id="proyectos" className="py-24 px-6 md:px-12 lg:px-24 bg-[#0B0B0B]">
      <div className={`transition-all duration-700 mb-16 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-sm font-semibold tracking-wider uppercase text-[#6B7280] mb-4">
          Proyectos
        </h2>
        <p className="text-2xl md:text-3xl font-bold text-[#EAEAEA] max-w-2xl">
          Soluciones desarrolladas para resolver necesidades reales
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
