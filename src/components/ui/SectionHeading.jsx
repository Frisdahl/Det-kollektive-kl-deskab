export function SectionHeading({ as: Component = "h2", label, heading, text }) {
  return (
    <div className="max-w-3xl">
      {label ? (
        <p className="fluid-kicker mb-4 font-medium uppercase text-success">
          {label}
        </p>
      ) : null}
      <Component className="section-title font-medium text-heading">
        {heading}
      </Component>
      {text ? (
        <p className="fluid-body-lg mt-6 text-body">{text}</p>
      ) : null}
    </div>
  );
}
