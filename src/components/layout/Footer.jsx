import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-svg.svg";
import applePayIcon from "../../assets/icons/applepay.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import googlePayIcon from "../../assets/icons/googlepay.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import mastercardIcon from "../../assets/icons/mastercard.svg";
import mobilePayIcon from "../../assets/icons/mobilepay.svg";
import visaIcon from "../../assets/icons/visa.svg";
import { Container } from "./Container";

const navigationLinks = [
  { label: "Sådan gør du", to: "/#saadan-goer-du" },
  { label: "Om os", to: "/om-os" },
  { label: "Butikker", to: "/#butikker" },
  { label: "Gavekort", to: "/#gavekort" },
  { label: "Medlemskab", to: "/medlemskab" },
];

const informationLinks = [
  { label: "Cookies", to: "/cookies" },
  { label: "Vilkår", to: "/vilkaar" },
  { label: "Privatlivspolitik", to: "/privatlivspolitik" },
  { label: "Kontakt", to: "/kontakt" },
  { label: "Medlems-FAQ", to: "/faq" },
];

function AppStoreButton() {
  return (
    <a
      href="#download-app"
      aria-label="Download vores medlemsapp i App Store"
      className="inline-flex h-11 w-fit items-center gap-2 rounded-[0.45rem] bg-[#2A2926] px-3.5 text-[#FDFBF8] transition-colors hover:bg-[#CFAFA7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CFAFA7]"
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
    <li
      aria-label={label}
      className="flex h-12 min-w-24 items-center justify-center"
    >
      <img
        src={icon}
        alt=""
        className="max-h-12 max-w-36 object-contain"
        aria-hidden="true"
      />
    </li>
  );
}

export function Footer() {
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
    <>
      <div className="mt-auto pt-8 md:pt-16" aria-hidden="true" />
      <footer className="relative bg-[#DCC8B6] text-[#2A2926]">
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
          <Link
            to="/"
            aria-label="Det Kollektive Klædeskab"
            className="pointer-events-auto relative flex -translate-y-1/2 items-center justify-center"
          >
            <span
              aria-hidden="true"
              className="absolute h-16 w-16 rounded-full bg-[#F8F5F1] md:h-[170px] md:w-[170px]"
            />
            <img
              src={logo}
              alt="Det Kollektive Klædeskab"
              className="relative h-20 w-20 shrink-0 object-contain md:h-[150px] md:w-[150px]"
            />
          </Link>
        </div>

        <Container className="pt-20 pb-12 md:pt-32 md:pb-16">
          <section className="flex flex-col items-center gap-4 text-center">
            <h2 className="fluid-title-md font-['Manrope'] font-semibold tracking-[0.12em] text-[#2A2926]">
              Følg os på sociale medier
            </h2>
            <ul
              className="flex items-center justify-center gap-3"
              aria-label="Sociale medier"
            >
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className="group flex h-16 w-16 items-center justify-center rounded-full border-0 bg-transparent text-[#2A2926] transition-colors hover:bg-transparent hover:text-[#CFAFA7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CFAFA7]"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="h-10 w-10 object-contain transition-transform duration-300 ease-out group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10 grid gap-9 border-y border-[#E6DED6] py-9 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <section className="border-r border-[#E6DED6] pr-6 sm:border-r-0 sm:pr-0 lg:border-r lg:pr-6">
              <h3 className="font-['Manrope'] text-lg leading-none font-bold tracking-normal text-[#2A2926]">
                Navigation
              </h3>
              <ul className="mt-6 space-y-2.5">
                {navigationLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-base text-[#2A2926] transition-colors hover:text-[#CFAFA7]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-r border-[#E6DED6] pr-6 sm:border-r-0 sm:pr-0 lg:border-r lg:pr-6">
              <h3 className="font-['Manrope'] text-lg leading-none font-bold tracking-normal text-[#2A2926]">
                Information
              </h3>
              <ul className="mt-6 space-y-2.5">
                {informationLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-base text-[#2A2926] transition-colors hover:text-[#CFAFA7]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="sm:col-span-2 lg:col-span-1">
              <h3 className="font-['Manrope'] text-lg leading-none font-bold tracking-normal text-[#2A2926]">
                Download vores medlemsapp
              </h3>
              <div className="mt-6">
                <AppStoreButton />
              </div>
            </section>
          </div>

          <div className="flex flex-col items-center gap-5 pt-12 text-center md:pt-14">
            <p className="text-sm text-[#6F655F]">
              © {new Date().getFullYear()} Det Kollektive Klædeskab
            </p>
            <ul
              className="flex flex-wrap items-center justify-center gap-2"
              aria-label="Betalingsmidler"
            >
              {paymentMethods.map((method) => (
                <PaymentIcon
                  key={method.label}
                  label={method.label}
                  icon={method.icon}
                />
              ))}
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}
