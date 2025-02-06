# Sprint 7: Star Wars Application

## Description
The Star Wars Application is an interactive demo web app for Star Wars enthusiasts.
It allows users to explore various starships from the Star Wars universe and features user authentication.

## Characteristics
- Starship Information: Fetches and displays detailed starship data for logged-in users.
- User Authentication: Users can register, log in, and log out.
- Dynamic Navbar: Displays login and register buttons for guests
- Using Firebase back-end framework for user authentication

## Installation 

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- Firebase account

### Step-by-step Installation
1. Clone the repository
```bash
git clone https://github.com/memugr/StarWars
```

2. Open directory
```bash
cd StarWars
```

3. Install all the dependencies needed to run the app
```bash
npm install
```

4. Configure environment variables for Firebase
   - Create a ```.env``` file in the root directory
   - Fill in your credentials
     ```bash
     VITE_FIREBASE_API_KEY=
     VITE_FIREBASE_AUTH_DOMAIN=
     VITE_FIREBASE_PROJECT_ID=
     VITE_FIREBASE_STORAGE_BUCKET=
     VITE_FIREBASE_MESSAGING_SENDER_ID=
     VITE_FIREBASE_APP_ID=
     VITE_FIREBASE_MEASUREMENT_ID=
     ```
4. Start the development server
```bash
npm run dev
```

5. Navigate to the local host in your browser

## Project Structure

```bash
├── src/                       # Source code of the application
│   ├── app/                       # Core application setup
│   │   ├── pages/                   # Individual page components
│   │   │    ├── Home.jsx              # Home page component
│   │   │    ├── Navbar.jsx            # Navigation bar component
│   │   │    └── Starships.jsx         # Starships listing page
│   │   ├── App.jsx                  # Main App component with routing setup
│   │   ├── provider.jsx             # Global provider wrapping
│   │   ├── rootLayout.jsx           # Root layout with navigation bar and page
│   │   └── routes.jsx               # Route definitions and configuration
│   ├── assets/                   # Static files (background image, site icon)
│   ├── components/               # Reusable UI components
│   ├── context/                  # React Context API states
│   ├── hooks/                    # Custom React hooks
│   ├── styles/                   # Global styles and Tailwind config
│   ├── firebase.jsx              # Firebase initialization and config
│   └── main.jsx                  # Entry point of the application
├── .env                      # Environment variables
├── .gitignore                # Git ignore rules
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── package-lock.json         # Dependency lock file
├── package.json              # Project metadata and dependencies
├── postcss.config.js         # PostCSS configuration for Tailwind
└── README.md                 # Project documentation
```

## Technologies Used 
- React & Vite: Component-based UI library
- React Router: For navigation
- Tailwind CSS: For responsive and clean UI styling
- Lucide Icons: For social media and interface icons
- Fetch API for handling API requests
- Back-end framework Firebase for user authentication

## APIs Used
- Firebase: User authentication (email and password)
- Star Wars API (SWAPI): Fetches detailed starship data from the Star Wars universe

## Available Scripts
- `npm run dev` - Starts development server
- `npm run build` - Creates production build
- `npm run lint` - Checks potential errors
- `npm run preview` - Preview your production build locally before deploying

## Licence 
This project is licensed under the MIT License.

Copyright (c) 2025 Mei Ying Mullen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact
For any inquiries, feedback, or support, feel free to reach out:  

- Open an issue on [GitHub Issues](https://github.com/memugr/Sprint-7-StarWars/issues).
- Request [pull request](https://github.com/memugr/Sprint-7-StarWars/pulls)  
- Email: mmullengracia@gmail.com

