import { useEffect, useState, useMemo } from 'react'
import ImageCarousel from './ImageCarousel'

function parseProjectContent(html) {
  const features = []
  let stack = ''
  
  const ulMatch = html.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i)
  if (ulMatch) {
    const liMatches = ulMatch[1].match(/<li[^>]*>([\s\S]*?)<\/li>/gi)
    if (liMatches) {
      liMatches.forEach(li => {
        const text = li.replace(/<li[^>]*>|<\/li>/gi, '').replace(/<[^>]+>/g, '').replace(/[*_]/g, '').trim()
        if (text && !text.toLowerCase().includes('backend') && !text.toLowerCase().includes('frontend') && !text.toLowerCase().includes('tecnolog')) {
          features.push(text)
        }
      })
    }
  }

  const pMatches = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi)
  if (pMatches) {
    pMatches.forEach(p => {
      const text = p.replace(/<p[^>]*>|<\/p>/gi, '').replace(/<[^>]+>/g, '').replace(/[*_]/g, '').trim()
      if (text.toLowerCase().includes('backend') || text.toLowerCase().includes('frontend') || text.toLowerCase().includes('tecnolog')) {
        stack = text
      }
    })
  }

  return { features, stack }
}

export default function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(`project-${index}`)
      if (element) {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          setVisible(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [index])

  const { features, stack } = useMemo(() => parseProjectContent(project.content), [project.content])

  const description = project.subtitle || 'Sistema de gestión integral'

  return (
    <div 
      id={`project-${index}`}
      className={`group transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="bg-[#111111] rounded-xl p-8 border border-[#222222] hover:border-[#3ECF8E]/50 hover:bg-[#1A1A1A] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/30">
        
        <div className="mb-8">
          <ImageCarousel images={project.images} />
        </div>

        <div className="space-y-5">
          <div>
            <h3 className="text-2xl font-bold text-[#EAEAEA] mb-2">
              {project.title}
            </h3>
            <p className="text-[#A1A1AA] text-base">
              {description}
            </p>
          </div>

          {features.length > 0 && (
            <div className="space-y-2">
              {features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3ECF8E] mt-2 flex-shrink-0" />
                  <span className="text-[#A1A1AA] text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {stack && (
            <div className="pt-4 border-t border-[#1F1F1F]">
              <span className="text-xs text-[#6B7280] uppercase tracking-wider">{stack}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
