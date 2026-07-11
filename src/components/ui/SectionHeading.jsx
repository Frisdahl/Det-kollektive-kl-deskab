export function SectionHeading({ as: Component = "h2", label, heading, text }) {
  return (
    <div className="max-w-3xl">
      {label ? (
        <p className="fluid-kicker mb-4 font-medium uppercase text-[#7A8674]">
          {label}
        </p>
      ) : null}
      <Component className="section-title font-medium text-[#2A2926]">
        {heading}
      </Component>
      {text ? (
        <p className="fluid-body-lg mt-6 text-[#6F655F]">{text}</p>
      ) : null}
    </div>
  );
}
