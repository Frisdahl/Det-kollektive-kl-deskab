const variantClasses = {
  primary: 'bg-[#CFAFA7] text-[#2A2926] hover:bg-[#8A776B]',
  secondary:
    'border border-[#CFAFA7] bg-transparent text-[#2A2926] hover:bg-[#FDFBF8]',
  ghost: 'bg-transparent text-[#2A2926] hover:bg-[#FDFBF8]',
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
        'inline-flex cursor-pointer items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CFAFA7]',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
}
