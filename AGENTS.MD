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

Brug en varm, blød og bæredygtig palette:

- Background: #fefeff
- Header background: #fefeff
- Menu background: #fefeff
- Surface: #FFFDF7
- Primary: #fce6f1
- Primary dark: #4F5F35
- Accent: #ffe7ce
- Text: #1c1d1d
- Muted text: #6F6B61
- Border: #eeefef

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
