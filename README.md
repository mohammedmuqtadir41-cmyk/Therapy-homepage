# Dr. Maya Reynolds - Therapy Homepage

A redesigned therapy practice homepage built as part of a frontend development assignment.

The project started by recreating the structure and layout of the original Conejo Valley Counseling homepage and was then redesigned with a completely new visual direction, content, imagery, and a custom "Our Office" section.

## Assignment

### Original Website

https://www.conejovalleycounseling.com/home

### Objective

The assignment required:

- Cloning the original homepage structure and layout
- Redesigning the page with a new theme
- Replacing the original copy and images
- Maintaining the overall layout flow of the original homepage
- Creating one completely new custom section that was not present in the original template

### Custom Section

A new **Our Office** section was added to showcase Dr. Maya Reynolds' physical practice space.

The section includes:

- Santa Monica office information
- In-person therapy availability
- Secure telehealth availability across California
- Office environment and atmosphere
- Office imagery provided in the therapist profile

## Design

The redesigned website uses a calm, editorial visual direction created specifically for a private therapy practice.

### Visual System

- Warm ivory backgrounds
- Deep forest green
- Muted sage accents
- Soft sand tones
- Serif display typography
- Clean sans-serif body typography
- Generous whitespace
- Minimal borders and dividers
- Editorial-style image layouts
- Responsive layouts for desktop and mobile

## Sections

The homepage includes:

1. Header & Navigation
2. Hero
3. Introduction
4. Who I Work With
5. Story / About
6. How We Work Together
7. Honoring Your Story
8. Our Office - Custom Section
9. Specialties
10. FAQ
11. Appointment CTA
12. Contact
13. Footer

## Tech Stack

- Next.js
- React
- JavaScript
- Tailwind CSS
- HTML
- CSS
- Git & GitHub
- Vercel

## Project Structure

```text
src/
├── app/
│   ├── page.js
│   ├── layout.jsx
│   ├── globals.css
│   └── icon.png
│
└── components/
    ├── Header.jsx
    ├── Hero.jsx
    ├── IntroSection.jsx
    ├── WhoWeHelp.jsx
    ├── StorySection.jsx
    ├── HowWeWork.jsx
    ├── HonoringStory.jsx
    ├── OurOffice.jsx
    ├── Specialties.jsx
    ├── FAQSection.jsx
    ├── AppointmentCTA.jsx
    ├── ContactSection.jsx
    └── Footer.jsx

public/
└── Images/
    ├── office1.jpeg
    └── office2.jpeg