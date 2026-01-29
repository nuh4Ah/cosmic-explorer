import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`
        bg-space-card backdrop-blur-sm rounded-xl p-6 border border-space-hover
        ${hover ? 'transition-all duration-150 hover:scale-105 hover:bg-space-hover hover:shadow-lg hover:shadow-nebula-purple/20' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}