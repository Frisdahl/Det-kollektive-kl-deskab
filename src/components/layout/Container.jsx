export function Container({ as: Component = "div", className = "", children }) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-8 lg:px-12 xl:px-16 ${className}`}
    >
      {children}
    </Component>
  );
}
