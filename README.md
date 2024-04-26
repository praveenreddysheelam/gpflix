
# Netflix GPT

Movies recomandation with AI.

## Setup

- Install react app using create-react-app (CRA)

```js
npx create-react-app netflix-gpt
```

- Create `.env` file and put configure

```js
REACT_APP_BASE_URL = YOUR_APPLICATION_BASE_URL; // http://localhost:300
REACT_APP_OPENAI_KEY = YOUR_API_KEY_WILL_HERE;
REACT_APP_TMDB_KEY = YOUR_API_KEY_WILL_HERE;
```

- Install and init tailwind css

```js
npm install -D tailwindcss
npx tailwindcss init
```

- Configure tailwind css in your project

  `npx tailwindcss init` command will create a file `tailwind.config.js` in your project's root directory.
  Open `tailwind.config.js` and replace all content with below code.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Now you created a react app with tailwind css successfully. Now run the below command on your terminal to start your local development server.

```js
npm start
```
# GPTFLIX 
 - Create React App 
 - Configure Tailwind to React app 
 - Header
 - Login 
 - Signup 
 - form vaidation 
 - Firebase deployment to production 
 # Features
   - Login/Sign up
       -login/signup form 
       -redirect to browse
   - Browse (after authentication)
      - Header
      - Main movie 
        - Trailer in Background
        - Description & Title 
      - Movie Suggestion 
         - List of movies (Various lists)
    - Netflix GPT 
       -search bar 
       -movie suggestions

