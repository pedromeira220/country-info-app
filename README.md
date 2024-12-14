# Country Info App

This repository contains the codebase for the Country Info App, created as a code test for DevelopsToday. The app consists of a frontend and a backend component.

---

## Prerequisites

Ensure you have the following installed on your system before running the project:

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## How to run the project

Follow these steps to set up and run the application locally:

1. **Clone this repository**
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Set up environment variables**
   - Navigate to the `frontend` and `backend` folders.
   - Create a `.env` file in each folder by copying the content from `.env.example`:
     ```bash
     cp .env.example .env
     ```

3. **Install dependencies**
   - Run the following command in both `frontend` and `backend` folders to install required packages:
     ```bash
     npm install
     ```

4. **Start the backend**
   - Navigate to the `backend` folder and run:
     ```bash
     npm run start:dev
     ```

5. **Start the frontend**
   - Navigate to the `frontend` folder and run:
     ```bash
     npm run dev
     ```

6. **Access the application**
   - Open your browser and navigate to:
     ```
     http://localhost:3000
     ```
