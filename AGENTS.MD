# Project Rules – Det Kollektive Klædeskab

## Stack

- React + Vite
- Tailwind CSS
- Ingen backend
- Ingen unødvendige packages
- Brug komponentbaseret struktur

## Designretning

Projektet skal føles moderne, feminint, cirkulært og community-orienteret.

Visuel inspiration:

- Fontstørrelser og typografisk hierarchy inspireres af SecondShopper.
- Farver og varme toner inspireres af ReCraft appen.
- Designet må ikke kopiere siderne direkte.

## Farver

Brug en varm, blød og eksklusiv taupe/brun palette:

- Background: #F5F0EC
- Surface: #F8F3EF
- Primary: #847165
- Primary hover: #735F54
- Accent / CTA: #D6B3A2
- Accent hover: #C59D8B
- Heading: #2E2926
- Body text: #5F544D
- Border: #DED3CA
- Divider: #D8CDC3
- Success: #799B7A
- Error: #B86C6C

Farver skal defineres centralt som Tailwind v4 theme tokens og bruges via semantiske klasser som `bg-background`, `bg-surface`, `bg-primary`, `bg-accent`, `text-heading`, `text-body`, `border-border` og `border-divider`.

Undgå ren hvid/sort som hovedfarver.

## Typografi

Brug store, rene overskrifter inspireret af SecondShopper.

Font scale:

- Hero title: clamp(3.5rem, 9vw, 8rem)
- H1: clamp(3rem, 7vw, 6rem)
- H2: clamp(2.25rem, 5vw, 4.5rem)
- H3: clamp(1.5rem, 3vw, 2.25rem)
- Body large: 1.25rem
- Body: 1rem
- Small: 0.875rem

Overskrifter:

- Stramme linjehøjder
- Gerne uppercase på labels og små navigationselementer
- Brug tracking-tight på store headings

## Layout

- Mobile-first
- Store visuelle sektioner
- God whitespace
- Rounded corners på cards/images
- Max width: 1440px
- Sektion padding: py-20 md:py-32
- Brug grid/flex simpelt og overskueligt

## Components

Placér komponenter sådan:

src/

- components/
  - layout/
  - sections/
  - ui/
- pages/
- assets/
- data/
- utils/

## Koderegler

- Brug funktionelle React components
- Brug Tailwind classes direkte i JSX
- Undgå inline styles
- Undgå store komponenter; split sektioner op
- Brug semantisk HTML
- Brug descriptive component names
- Brug dansk tekst på sitet
- Kør lint før større ændringer

## Animation

- Animationer skal være subtile
- Brug kun Framer Motion hvis nødvendigt
- Fokus på fade, slide-up og scroll reveal
- Ingen overdrevne effekter

## Content tone

Sproget skal være:

- varmt
- lokalt
- simpelt
- troværdigt
- ikke for corporate

Skriv som et moderne secondhand/community brand.
