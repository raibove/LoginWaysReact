This is for implementing private routes in react and it uses tokens in local storage.

In this code we have 5 files and three web pages (Login,Setting,Dashboard)
index.js:
    It send user to desired page with the help of react-router-dom module. We import three components,BrowserRouter,Route and Switch, from react-router-dom. 
        BrowserRouter is used for doing client side routing.
        Route is the conditionally shown component based on matching a path to a URL.
        Switch returns only the first matching route rather than all matching routes.
        ProtectedRoute is the coponent we wrote and it is explained later.
    Refrences:
         https://reactrouter.com/web/guides/primary-components#:~:text=At%20the%20core%20of%20every,BrowserRouter%3E%20uses%20regular%20URL%20paths.
         
         https://gist.github.com/siakaramalegos/df4620c52e829f6107c75d5c3f0ad7f5

ProtectedRoute.js:
    It is used to implement protected routing. It checks if a token is added in local storage. If present then it directs user to desired page else user is redirected to login page.
    It uses Redirect component from react-router-dom module.
        Redirect: It is used to redirect the user to a specific page and override the current location.
    Here we use a Component variable to store the props, i.e the path user wants to go. And we send user if he is autharised else he is redirected.

Login.js
    It is the main page where user is taken if he is not authenticated.
Dashboard.js & Setting.js:
    These are basic sample pages made to show how private routing works.


If user is authenticated and enters a wrong path then he is always taken to dashboard page because in line <ProtectedRoute component={Dashboard} /> i.e index.js Line no 17, we have not given any path and have send Dashboard as props to ProtectedRoute.js.
If user is not authenticated, then he goes to login page as we have used redirect to login if not authenticated in ProtectedRoute.js


To run the app:
    Clone/Download the repository
    cd LoginWaysReact
    npm install
    npm start

    Once the local host opens in browser. Open console in browser and write localStorage.setItem('token','1');
    Now you are an authenticated user as you have entered a token. You now have access to dashboard and setting page.

    To logout type localStorage.clear();
