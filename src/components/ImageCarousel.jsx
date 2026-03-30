import { useState } from 'react'

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (!images || images.length === 0) return null

  return (
    <div className="relative overflow-hidden rounded-lg bg-[#1A1A1A]">
      <div 
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full flex-shrink-0 aspect-video">
            <img 
              src={img} 
              alt={`Screenshot ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#1A1A1A]/80 hover:bg-[#3ECF8E] rounded-full transition-all duration-200 hover:scale-110 group"
          >
            <svg className="w-4 h-4 text-[#EAEAEA] group-hover:text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#1A1A1A]/80 hover:bg-[#3ECF8E] rounded-full transition-all duration-200 hover:scale-110 group"
          >
            <svg className="w-4 h-4 text-[#EAEAEA] group-hover:text-[#0B0B0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? 'bg-[#3ECF8E] w-6' : 'bg-[#1A1A1A]/50 w-1.5'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
