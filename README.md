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
const getData= async ()=> {
    const Query = "Act as a Movie Recommendation system and suggest some movies for the query : " +
        "Funny Indian Movies" +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const data=await fetch('http://localhost:3001/api/gpt',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: Query }),
    });
    const json= await data.json();
    console.log(json?.result);
  }
  useEffect(() => {
      getData();
  }, []);