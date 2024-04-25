export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWQ5ZmUxYTdmZjg1ZmU4Yzg4YmViNzczY2ZlYjNlNyIsInN1YiI6IjY2MjAzNWE4YTM5ZDBiMDE3ZDU2OWI1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Djr8M7uZz6vW3TEtJzT9sP8WDXgKuHHIc8zUgy9ROMY'
    }
  };
  export const IMG_CDN= "https://image.tmdb.org/t/p/w500/";
  export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
export const OPEN_AI_KEY=process.env.REACT_APP_API_KEY;