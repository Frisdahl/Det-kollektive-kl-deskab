import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import navbarImage from "../../assets/images/navbar-image.webp";
import { Button } from "../ui/Button";
import { Container } from "./Container";

const menuLinks = [
  { label: "Sådan gør du", to: "/#saadan-goer-du" },
  { label: "Om os", to: "/om-os" },
  { label: "Butikker", to: "/#butikker" },
  { label: "Gavekort", to: "/gavekort" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let timeout;

    if (isMenuOpen) {
      setIsMenuVisible(true);
      return undefined;
    }

    timeout = window.setTimeout(() => setIsMenuVisible(false), 650);

    return () => window.clearTimeout(timeout);
  }, [isMenuOpen]);

  return (
    <div
      className={[
        "sticky top-0 z-50 bg-[#f9f4f1] text-[#2A2926] transition-shadow duration-300",
        isScrolled ? "shadow-[0_4px_20px_rgba(42,41,38,0.08)]" : "",
      ].join(" ")}
    >
      <header className="relative z-50 bg-[#f9f4f1]">
        <Container className="flex min-h-24 items-center justify-between gap-4 bg-[#f9f4f1] md:gap-8">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex min-w-0 cursor-pointer flex-col items-start font-['filson-pro'] leading-[0.84] font-normal tracking-tight text-[#8A776B]"
            aria-label="Det Kollektive Klædeskab"
          >
            <span className="text-[clamp(0.95rem,0.85vw+0.6rem,1.1rem)]">
              Det
            </span>
            <span className="text-[clamp(1.2rem,1.1vw+0.8rem,1.6rem)]">
              Kollektive
            </span>
            <span className="text-[clamp(1.2rem,1.1vw+0.8rem,1.6rem)]">
              Klædeskab
            </span>
          </Link>

          <div className="flex items-center justify-end gap-2 md:gap-3">
            <Button
              as={NavLink}
              to="/medlemskab"
              onClick={closeMenu}
              className="hidden px-5 py-2.5 !text-xs md:inline-flex"
            >
              Meld dig ind
            </Button>

            <Button
              as="a"
              href="https://app.detkollektiveklaedeskab.dk/login"
              variant="ghost"
              className="hidden cursor-pointer px-4 py-2.5 !text-xs hover:bg-transparent hover:text-[#CFAFA7] sm:inline-flex"
            >
              Log ind
            </Button>

            <button
              type="button"
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-[#2A2926] transition-colors hover:text-[#CFAFA7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CFAFA7]"
              aria-label="Kurv"
            >
              <ShoppingBag
                aria-hidden="true"
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            </button>

            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-12 w-14 cursor-pointer flex-col items-center justify-center gap-1 text-[#2A2926] transition-colors hover:text-[#CFAFA7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CFAFA7]"
              aria-expanded={isMenuOpen}
              aria-controls="site-menu"
            >
              <span className="relative h-4 w-6" aria-hidden="true">
                <span
                  className={[
                    "absolute left-0 top-0 h-[2px] w-6 origin-center bg-current transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isMenuOpen ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[7px] h-[2px] w-6 bg-current transition-opacity duration-[520ms] ease-out",
                    isMenuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[14px] h-[2px] w-6 origin-center bg-current transition-transform duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isMenuOpen
                      ? "-translate-y-[7px] -rotate-45"
                      : "translate-y-0 rotate-0",
                  ].join(" ")}
                />
              </span>
              <span className="text-[0.6rem] font-medium leading-none uppercase tracking-[0.12em]">
                Menu
              </span>
            </button>
          </div>
        </Container>
      </header>

      {isMenuVisible ? (
        <>
          <button
            type="button"
            aria-label="Luk menu"
            onClick={closeMenu}
            className={[
              "fixed inset-x-0 bottom-0 top-24 z-30 bg-[#2A2926]/35 transition-opacity duration-500 ease-out",
              isMenuOpen ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />

          <div className="pointer-events-none absolute inset-x-0 top-full z-40 bg-transparent">
            <Container className="pointer-events-none flex justify-end">
              <div
                id="site-menu"
                data-state={isMenuOpen ? "open" : "closed"}
                className={[
                  "site-menu-panel pointer-events-auto w-[min(calc(100vw-2rem),32rem)] rounded-b-[1.5rem] bg-[#FDFBF8] shadow-[0_30px_80px_rgba(42,41,38,0.18)]",
                  isMenuOpen ? "" : "pointer-events-none",
                ].join(" ")}
              >
                <div className="m-4 flex flex-row items-center gap-4 rounded-[1.25rem] bg-[#f9f4f1] p-4">
                  <div className="flex min-h-24 w-28 shrink-0 items-center justify-center overflow-hidden rounded-[1rem] bg-[#DCC8B6] sm:w-36">
                    <img
                      src={navbarImage}
                      alt=""
                      className="h-full w-full object-cover"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col items-start gap-4">
                    <div className="space-y-1">
                      <h2 className="text-base leading-tight font-semibold tracking-tight text-[#2A2926] underline decoration-[#2A2926]/60 decoration-2 underline-offset-4 sm:text-lg">
                        Giv et medlemskab videre
                      </h2>
                      <p className="text-sm leading-6 text-[#6F655F]">
                        Gavekort fra 250 kr.
                      </p>
                    </div>

                    <Button
                      as={Link}
                      to="/gavekort"
                      onClick={closeMenu}
                      className="cursor-pointer px-5 py-2.5 text-xs !lowercase tracking-normal"
                    >
                      vælg mit gavekort
                    </Button>
                  </div>
                </div>

                <nav aria-label="Menu" className="mt-6">
                  <ul className="flex flex-col items-center justify-center text-center">
                    {menuLinks.map((item) => (
                      <li
                        key={item.label}
                        className="w-full border-t border-[#E6DED6] last:[&_a]:rounded-b-[1.5rem]"
                      >
                        <NavLink
                          to={item.to}
                          onClick={closeMenu}
                          className="block w-full cursor-pointer py-4 text-base leading-none font-normal tracking-tight text-[#2A2926] uppercase transition-colors hover:bg-[#f9f4f1]"
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </Container>
          </div>
        </>
      ) : null}
    </div>
  );
}
