const variantClasses = {
  primary: 'bg-accent text-heading hover:bg-accent-hover',
  secondary:
    'border border-accent bg-transparent text-heading hover:bg-surface',
  ghost: 'bg-transparent text-heading hover:bg-surface',
}

export function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  type,
  children,
  ...props
}) {
  const buttonType = Component === 'button' ? (type ?? 'button') : type

  return (
    <Component
      type={buttonType}
      className={[
        'inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
}
