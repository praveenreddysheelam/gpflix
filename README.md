
# Netflix GPT

Movies recomandation with AI.

## Setup

- Install react app using create-react-app (CRA)

```js
npx create-react-app gptflix
```

- Create `.env` file and put configure

```js
REACT_APP_OPENAI_KEY = YOUR_API_KEY_WILL_HERE;
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
Live Demo : [Live Demo](https://okneeraj.github.io/netflix-gpt "Live Demo")

## Screen Shot

- Landing Page

  ![Landing Page](https://okneeraj.github.io/netflix-gpt/screenshot/01-Landing.png)



- Browse Page

  ![Browse Page](https://okneeraj.github.io/netflix-gpt/screenshot/04-Browse.png)

- Movie List

  ![Movie List](https://okneeraj.github.io/netflix-gpt/screenshot/05-Movie-List.png)


- GPT Search Page

  ![Search Page](https://okneeraj.github.io/netflix-gpt/screenshot/07-Search.png)


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

