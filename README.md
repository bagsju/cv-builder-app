# ATS-Friendly IT CV Builder APP

![React](https://img.shields.io/badge/React-18.0+-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-Frontend_Tooling-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-Styling-38B2AC?logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)

**Live Demo: [https://cv-builder-app-ten.vercel.app/](#)**

## Project Purpose
The primary goal of this project was to create a lightweight, accessible tool for my friends and peers to quickly generate professional, **ATS-friendly** (Applicant Tracking System) CVs tailored for the Polish IT and Tech job market. 

Instead of wrestling with formatting in Word or Canva, users can simply input their data, adjust the layout, pick a custom theme color, and export a perfectly aligned PDF.

## Key Features
* **Privacy-First (No Backend):** All data is processed entirely in the user's browser (Client-Side). No personal information is saved to any database.
* **Dynamic Theming:** An integrated Hex color picker allows users to instantly change the accent color of their entire resume.
* **Layout Engine:** Toggle between a Modern (2-column) design or a strictly Classic (1-column) format optimized for automated ATS parsers.
* **Polish Market Ready:** Pre-configured with mandatory GDPR/RODO compliance clauses required by Polish employers.
* **Print-to-PDF Optimized:** Custom CSS `@media print` rules ensure the browser exports a clean, marginless A4 document without UI clutter.

## Architecture & Tech Stack
This is a modern Single Page Application (SPA) built with a focus on speed and simplicity:
* **Framework:** React.js (Functional Components, React Hooks `useState` for dynamic form state management).
* **Build Tool:** Vite (chosen for its lightning-fast Hot Module Replacement and optimized production build).
* **Styling:** Tailwind CSS (utility-first CSS framework, heavily utilizing responsive design and print modifiers like `print:hidden`).
* **Hosting & CI/CD:** **Vercel**. The app is hosted statically, allowing anyone to use the generator via a public link without needing to install Node.js or clone the repository locally. Every push to the `main` branch automatically triggers a new deployment.

## How to run locally (For developers)
If you want to clone and run this project on your local machine:
```bash
# Install dependencies
npm install

# Start the local Vite development server
npm run dev