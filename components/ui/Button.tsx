import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  asChild,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-space-black inline-block text-center'
  
  const variants = {
    primary: 'bg-gradient-to-r from-nebula-purple to-star-blue text-white hover:scale-105 focus:ring-nebula-purple',
    secondary: 'bg-space-card text-text-primary hover:bg-space-hover focus:ring-star-blue',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (asChild) {
    return <span className={classes}>{children}</span>
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}