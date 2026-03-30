import { useEffect, useState, useMemo } from 'react'
import ImageCarousel from './ImageCarousel'

function parseMarkdownContent(html) {
  let processedHtml = html
    .replace(/Reconciliación/gi, 'Conciliación')
    .replace(/Screenshots sugeridos para capturar[\s\S]*?(?=<hr>|$)/gi, '')

  const sections = []
  const parts = processedHtml.split('<hr>')
  
  parts.forEach(part => {
    part = part.trim()
    if (!part) return

    const h2Match = part.match(/<h2[^>]*>(.*?)<\/h2>/i)
    const h3Match = part.match(/<h3[^>]*>(.*?)<\/h3>/i)
    const ulMatch = part.match(/<ul[^>]*>([\s\S]*?)<\/ul>/i)
    const pMatches = part.match(/<p[^>]*>([\s\S]*?)<\/p>/gi)

    let title = h2Match ? h2Match[1] : (h3Match ? h3Match[1] : null)
    let content = []

    if (pMatches) {
      pMatches.forEach(p => {
        const text = p.replace(/<p[^>]*>|<\/p>/gi, '').trim()
        if (text && !text.includes('<ul>') && !text.includes('</ul>')) {
          content.push(text)
        }
      })
    }

    if (ulMatch) {
      const liMatches = ulMatch[1].match(/<li[^>]*>([\s\S]*?)<\/li>/gi)
      if (liMatches) {
        content.push({
          type: 'list',
          items: liMatches.map(li => li.replace(/<li[^>]*>|<\/li>/gi, '').replace(/<[^>]+>/g, '').trim())
        })
      }
    }

    if (title || content.length > 0) {
      sections.push({ title, content })
    }
  })

  return sections
}

function Section({ title, content, delay }) {
  return (
    <div className={`mb-6 animate-fade-in-up`} style={{ animationDelay: `${delay}ms` }}>
      {title && (
        <h3 className="text-sm font-semibold text-[#3ECF8E] uppercase tracking-wider mb-3">
          {title.replace(/[*_]/g, '')}
        </h3>
      )}
      <div className="space-y-2">
        {content.map((item, idx) => (
          typeof item === 'string' ? (
            <p key={idx} className="text-[#A1A1AA] text-sm leading-relaxed">
              {item.replace(/[*_]/g, '')}
            </p>
          ) : (
            <ul key={idx} className="space-y-1.5">
              {item.items.map((li, liIdx) => (
                <li key={liIdx} className="flex items-start gap-2 text-[#A1A1AA] text-sm">
                  <span className="w-1 h-1 rounded-full bg-[#3ECF8E] mt-2 flex-shrink-0" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          )
        ))}
      </div>
    </div>
  )
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

  const sections = useMemo(() => parseMarkdownContent(project.content), [project.content])

  return (
    <div 
      id={`project-${index}`}
      className={`group transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      <div className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-[#222222] hover:border-[#3ECF8E] hover:bg-[#1A1A1A] transition-all duration-200">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#EAEAEA] mb-1">
            {project.title}
          </h3>
          <p className="text-[#6B7280] text-sm">
            {project.subtitle}
          </p>
        </div>

        <div className="mb-8">
          <ImageCarousel images={project.images} />
        </div>

        <div className="space-y-0">
          {sections.map((section, idx) => (
            <Section 
              key={idx} 
              title={section.title} 
              content={section.content}
              delay={idx * 100}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
