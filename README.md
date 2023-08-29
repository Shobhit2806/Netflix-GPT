# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to Login Page and vice-versa
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome

# Features

- Login/Sign Up
  - Sign In /Sign up Form [Reusable component,vaidations]
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Tailer in Background
    - Title & Description
    - MovieSuggestions
      - MovieLists \* N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Learnings

- New way to create form signin and signup,using same code.
- If you have very large forms which requires validations then use formik library.
- Used useRef instead of useState method for getting value of input field in signin/up form.
- onAuthStateChanged in Header component is called whenever user signup,signin or signout
- Api calls 2 times because of Strict mode enabled in our app. It will just happen twice in local but if we make a build for production it wont happen twice. It happens twice because React does extra rendering of your components to check for some inconsistency calls.
- Usage of Custom Hooks.
- When you are using Redux Store, store data in it. It is easily accessible

# Good to have

- Refresh Token implementation
- Think about custom forms.
