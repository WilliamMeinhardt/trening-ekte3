# FitFokus

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Backend Overview](#backend-overview)
- [Installation](#installation)

## Overview

FitFokus is a web platform designed to showcase gym services and provide potential members with a seamless experience. Whether users are looking for class schedules, information about personal trainers, or membership plans, FitFokus has them covered.

## Features

- **Home**: The landing page introduces users to the gym, showcasing featured services, offers, and promotions.
- **Om Oss (About Us)**: Learn more about the gym's history, mission, facilities, and meet the team of trainers.
- **Booking**: A streamlined booking system for classes and personal training sessions, with the ability to filter by type, date, and availability.
- **Medlemskap (Membership)**: Detailed information about membership plans, pricing, and the option to sign up for a plan that suits the user's needs.
- **Trainers Page**: Provides users with detailed bios and specialties of each trainer to help them choose the right one.

## Technologies Used

- **[Next.js](https://nextjs.org/)**: A powerful React framework used for server-side rendering and optimized performance.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework to rapidly build custom designs.
- **JavaScript/React**: Front-end JavaScript library used for building user interfaces.
- **Cookies (via js-cookie)**: Used for storing membership preferences and personal data securely on the client side.

## Backend Overview

The backend of FitFokus handles the business logic, user data management, and integrates third-party services for scheduling and payments. The architecture is designed for scalability and security, making use of APIs to handle different functionalities. Below are the key components of the backend:

### Database

The platform uses **NeonDB** as the primary database, which stores all user data, class schedules, bookings, and membership plans.
- **User Data**: Information about each user, including login credentials, membership status, and booking history.
- **Class Schedules and Bookings**: Stores all available class schedules, including trainers, available time slots, and user bookings.
- **Trainer Data**: Information about each trainer, including their specialties, availability, and bio.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/flexfit.git
3. Navigate to the project directory:
   ```sh
   cd flexfit
5. Install the dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
7. Start the development server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   yarn dev
   ```

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the repository:

```sh
git clone https://github.com/your-username/fitfokus.git
