# Restaurant Reservation Application 

A fully functional web application that enables users to make reservations at their preferred restaurant. Built to streamline the reservation process and provide a smooth, efficient experience for both diners and restaurant staff.

## Project Overview

The core objective of this application is to allow users to easily browse available reservation slots, select a time and date, and book their table, through a modern and responsive interface. On the frontend, the app uses **Next.js** with **TypeScript**, delivering a fast and server-side optimized experience. On the backend and database side, it uses the backend features of **Next.js** combined with **PostgreSQL**, **Prisma ORM** and **Supabase** services for authentication and real-time data needs.


## Key Features

* **User Authentication & Authorization** – Secure user sign-up and login flows using JWT (JSON Web Tokens), with role-based access where required.
* **Robust Availability System** – The application maintains up-to-date restaurant availability schedules, allowing users to view open slots in real time.
* **Scheduling System** – Users can select date and time options, the system checks availability, confirms bookings, and records them in the database.
* **Responsive & Modern UI** – Built with **TailwindCSS** and **styled-components**, the interface adapts seamlessly across desktop and mobile, providing users with a clean and intuitive experience.
* **Password Security with JWT** – Passwords are hashed and tokens issued for secure session management.
* **Full-Stack Architecture** – Frontend (Next.js + TypeScript) communicates with a backend layer (Next.js + Prisma + PostgreSQL), enabling real-time reservation updates and secure data handling.


## Technology Stack

### Frontend:
* Next.js
* TypeScript
* TailwindCSS
* styled-components

### Backend & Database:
* Next.js
* PostgreSQL
* Prisma ORM
* Supabase


### Why I Chose These Technologies

* **Next.js** – Provides hybrid static and server-side rendered React applications, improving load times, SEO, and overall user experience.
* **TypeScript** – Adds type safety and helps prevent common runtime errors; enhances developer productivity and maintainability.
* **TailwindCSS & styled-components** – Combine utility-first styling (Tailwind) with component-scoped styles (styled-components), making UI design flexible and maintainable.
* **PostgreSQL + Prisma ORM** – Strong relational database choice with Prisma giving a type-safe database interface and query builder in TypeScript.
* **Supabase** – Provides authentication, real-time subscriptions, and database hosting with minimal configuration which is best for full-stack prototypes and production apps.


## Challenges Faced

During development, I encountered several hurdles, notably with fetching data from the Supabase-backed PostgreSQL database. While the home page loads without issue, navigation to other pages often fails due to data-fetching errors and unexpected API response behavior. This required extensive debugging, schema adjustments in Prisma, and isolation of asynchronous data flows. 


## Future Improvements

* Add Admin Dashboard – for restaurant staff to manage reservations, update availability, and monitor bookings in real-time.
* Integrate Payment Gateway – allow users to pre-pay or leave a deposit while booking to reduce cancellations.
* Real-Time Updates – use WebSocket or Supabase real-time subscriptions to update availability live across users.
* Mobile-first Enhancements – optimize the mobile UI with gestures, push notifications, and one-tap booking.
* Full End-to-End Testing – expand unit tests and add integration tests to ensure booking flows are robust.


## Getting Started

To run this project locally:
1. **Clone the repository:**
   ```bash
   git clone https://github.com/HenryEA/Restaurant_Reservation_Application.git
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables** (in `.env.local` or equivalent):
   DATABASE_URL=your_postgres_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. **Run the development server:**

   ```bash
   npm run dev
   ```


Feel free to add screenshots, badges (Build/CI status), or a section for contribution guidelines if you plan to open source this project.
