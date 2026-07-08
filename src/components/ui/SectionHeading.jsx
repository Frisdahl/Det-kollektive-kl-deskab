export function SectionHeading({ as: Component = 'h2', label, heading, text }) {
  return (
    <div className="max-w-3xl">
      {label ? (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-[#7A8674]">
          {label}
        </p>
      ) : null}
      <Component className="text-5xl leading-none font-medium tracking-tight text-[#2A2926] md:text-7xl">
        {heading}
      </Component>
      {text ? (
        <p className="mt-6 text-lg leading-8 text-[#6F655F] md:text-xl">{text}</p>
      ) : null}
    </div>
  )
}
