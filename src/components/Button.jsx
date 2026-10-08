import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    ...props
  },
  ref
) {
  const base =
    'inline-flex items-center gap-2 font-sans font-medium tracking-widest uppercase transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-gold text-ivory hover:bg-gold-dark hover:shadow-gold',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-ivory',
    white: 'bg-ivory text-charcoal hover:bg-cream',
    ghost: 'text-gold hover:text-gold-dark underline-offset-4 hover:underline',
    dark: 'bg-charcoal text-ivory hover:bg-footer',
  }

  const sizes = {
    sm: 'text-xs px-5 py-3',
    md: 'text-sm px-8 py-4',
    lg: 'text-sm px-10 py-5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} ref={ref} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} ref={ref} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
})

export default Button
