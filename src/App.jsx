import { useState, useEffect } from 'react'
import { marked } from 'marked'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Process from './components/Process'
import Contact from './components/Contact'

const projects = [
  {
    id: 'ceni',
    title: 'CENI-HC',
    subtitle: 'Sistema de Gestión para Centro de Neurología Infantil',
    mdFile: '/ceni/ceni.md',
    images: [
      '/ceni/img/dashboard.png',
      '/ceni/img/login.png',
      '/ceni/img/patients.png'
    ]
  },
  {
    id: 'enf',
    title: 'Clínica de Enfermería',
    subtitle: 'Sistema de Gestión Integral',
    mdFile: '/enf/enfermeria.md',
    images: [
      '/enf/img/dashboard.png',
      '/enf/img/login.png',
      '/enf/img/proc.png',
      '/enf/img/tablet_1.png'
    ]
  }
]

function App() {
  const [projectData, setProjectData] = useState([])

  useEffect(() => {
    const loadProjects = async () => {
      const loaded = await Promise.all(
        projects.map(async (project) => {
          try {
            const response = await fetch(project.mdFile)
            const text = await response.text()
            const html = marked.parse(text)
            return { ...project, content: html }
          } catch (e) {
            console.error(`Error loading ${project.title}:`, e)
            return { ...project, content: '<p>Error loading content</p>' }
          }
        })
      )
      setProjectData(loaded)
    }
    loadProjects()
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Projects projects={projectData} />
      <Process />
      <Contact />
    </div>
  )
}

export default App
