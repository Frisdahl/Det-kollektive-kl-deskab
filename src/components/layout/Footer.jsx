import { ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import applePayIcon from "../../assets/icons/applepay.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import googlePayIcon from "../../assets/icons/googlepay.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import mastercardIcon from "../../assets/icons/mastercard.svg";
import mobilePayIcon from "../../assets/icons/mobilepay.svg";
import visaIcon from "../../assets/icons/visa.svg";
import logo from "../../assets/images/logo-svg.svg";
import { Container } from "./Container";

const navigationLinks = [
  { label: "Sådan gør du", to: "/saadan-goer-du" },
  { label: "Om os", to: "/om-os" },
  { label: "Butikker", to: "/butikker" },
  { label: "Gavekort", to: "/gavekort" },
  { label: "Medlemskab", to: "/medlemskab" },
];

const informationLinks = [
  { label: "Cookies", to: "/cookies" },
  { label: "Vilkår", to: "/vilkaar" },
  { label: "Privatlivspolitik", to: "/privatlivspolitik" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Medlems-FAQ", to: "/faq" },
  { label: "Afmeld medlemskab", to: "/afmeld-medlemskab" },
];

function AppStoreButton() {
  return (
    <a
      href="#download-app"
      aria-label="Download vores medlemsapp i App Store"
      className="inline-flex h-12 w-fit items-center gap-2 rounded-[0.65rem] bg-surface px-4 text-heading transition-colors hover:bg-accent/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          fill="currentColor"
          d="M17.15 12.57c-.02-2.15 1.76-3.19 1.84-3.24-1-1.46-2.55-1.66-3.1-1.68-1.32-.13-2.58.78-3.25.78s-1.7-.76-2.8-.74c-1.44.02-2.77.84-3.51 2.13-1.5 2.6-.38 6.45 1.08 8.56.72 1.03 1.57 2.19 2.7 2.15 1.08-.04 1.49-.7 2.8-.7s1.68.7 2.82.68c1.17-.02 1.9-1.05 2.61-2.09.82-1.2 1.16-2.36 1.18-2.42-.03-.01-2.34-.9-2.37-3.43M15.02 6.26c.59-.72 1-1.72.88-2.72-.85.03-1.88.57-2.5 1.29-.55.64-1.03 1.66-.9 2.64.95.07 1.92-.49 2.52-1.21"
        />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[0.6rem] uppercase tracking-[0.08em]">
          Download on the
        </span>
        <span className="text-base font-semibold">App Store</span>
      </span>
    </a>
  );
}

function PaymentIcon({ icon, label }) {
  return (
    <li aria-label={label} className="flex h-10 min-w-20 items-center justify-center">
      <img
        src={icon}
        alt=""
        className="max-h-10 max-w-28 object-contain"
        aria-hidden="true"
      />
    </li>
  );
}

export function Footer() {
  const { pathname } = useLocation();
  const isCancellationPage = pathname === "/afmeld-medlemskab";
  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/detkollektiveklaedeskab",
      icon: facebookIcon,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/detkollektiveklaedeskab/",
      icon: instagramIcon,
    },
  ];
  const paymentMethods = [
    { label: "Visa", icon: visaIcon },
    { label: "Apple Pay", icon: applePayIcon },
    { label: "MobilePay", icon: mobilePayIcon },
    { label: "Google Pay", icon: googlePayIcon },
    { label: "Mastercard", icon: mastercardIcon },
  ];

  return (
    <footer
      className={[
        "relative z-20 bg-heading text-surface",
        isCancellationPage ? "mt-0" : "mt-12 md:mt-14",
      ].join(" ")}
    >
      <Container className="pb-12 pt-0 md:pb-16">
        <div className="flex flex-col items-center border-b border-background/16 pb-10 text-center">
          <Link
            to="/"
            aria-label="Det Kollektive Klædeskab"
            className="-mt-14 inline-flex h-28 w-28 items-center justify-center rounded-full bg-background p-2 transition-transform duration-300 hover:scale-105 md:-mt-16 md:h-32 md:w-32"
          >
            <img
              src={logo}
              alt=""
              className="h-full w-full object-contain"
              aria-hidden="true"
            />
          </Link>
          <p className="fluid-kicker mt-8 font-medium uppercase text-divider">
            følg os på sociale medier
          </p>
          <ul className="mt-5 flex items-center justify-center gap-3" aria-label="Sociale medier">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="group flex h-16 w-16 items-center justify-center rounded-full text-surface transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="h-9 w-9 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
          <h2 className="section-title mt-6 max-w-2xl font-medium">
            Mere fællesskab, flere garderober, mindre forbrug.
          </h2>
        </div>

        <div className="grid gap-5 py-10 md:grid-cols-2 lg:grid-cols-3">
          <section className="p-6">
            <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-[0.12em] text-divider">
              navigation
            </h3>
            <ul className="mt-6 space-y-3">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-base text-surface transition-colors hover:text-accent"
                  >
                    {item.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-6">
            <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-[0.12em] text-divider">
              information
            </h3>
            <ul className="mt-6 space-y-3">
              {informationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="group inline-flex items-center gap-2 text-base text-surface transition-colors hover:text-accent"
                  >
                    {item.label}
                    <ArrowUpRight
                      className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="p-6 md:col-span-2 lg:col-span-1">
            <h3 className="font-['Manrope'] text-sm font-bold uppercase tracking-[0.12em] text-divider">
              download vores medlemsapp
            </h3>
            <p className="mt-5 text-base leading-7 text-background/78">
              Hav dit medlemskab, dine point og garderoben tæt på i hverdagen.
            </p>
            <div className="mt-6">
              <AppStoreButton />
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-6 border-t border-background/16 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm text-background/58">
            © {new Date().getFullYear()} Det Kollektive Klædeskab
          </p>
          <ul className="flex flex-wrap items-center gap-2" aria-label="Betalingsmidler">
            {paymentMethods.map((method) => (
              <PaymentIcon key={method.label} label={method.label} icon={method.icon} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
