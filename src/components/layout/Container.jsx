export function Container({ as: Component = "div", className = "", children }) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:max-w-[1560px] lg:px-12 xl:max-w-[1680px] xl:px-16 ${className}`}
    >
      {children}
    </Component>
  );
}
