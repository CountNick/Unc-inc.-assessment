# Unc Inc. routing assessment

This project was made for the interview process at Unc Inc. This simple application is made with s bootstrapped with [Create React App](https://github.com/facebook/create-react-app). A live example of the application can be found on: https://uncinc-assessment.netlify.app/

# About the project

This application contains the following:

- home page visible on `/`
- login page visible on `/login`
- dashboard page visible on `/dashboard`

## The home page

The home page is the welcoming page to the application, since the focus in this project was mainly on the login and redirection flow I've chosen not to render any additional elements on this page.

## The login page

The login page renders the `LoginForm` component. This component is responsible for logging the user in. When there is no user logged in the page will render a the `LoginForm` with two form fields:

- A text field
- A password field

When the submit button is pressed the values of the filled in forms will be checked with the username and password set in the global user context. There are three possible scenarios here:

- The username and password are correct, this will set the state of `formMessage` to `You are logged in` and sets the global user state of `isLoggedIn` to true. The user will be redirected to `/dashboard` after.
- The username and/or password is incorrect this will set the state of `formMessage` to `Invalid credentials, please try again`

Or:

- When logged in the `Logout` buttons is clicked, this sets the global user state of `isLoggedIn` to false

## The dashboard page

The dashboard page itself does not really render any UI elements either. The main thing on this page is that the content won;t be visible if the user is not logged in and will be redirected to the `/login` page. After succesfully logging in the user will be redirected to this page, and the title `Welcome uncinc to the dashboard` will be shown.

## State management

### Global states

I've chosen to add two global states using `useContext` these are:

- user context
- ui context

Both these states should be accessible from a broader perspective of components and are therefore better suited to as loosely coupled states. I've also for global states here with scalability in mind.

### UI context

The ui context is now only responsible for setting a global state called `menuIsOpen`. This state is used in multiple components:

- `App` to close the mobile menu on route changes
- `MenuOverlayToggle` to toggle the mobile overlay menu
- `NavBarMenu` to show the elements when the state changes

### User context

The user context is responsible for housing the user credentials and the global state called `isLoggedIn`. The user context is responsible for the following:

- Check if there's a stored session in `LocalStorage` for `LoggedIn` if true immediately set the user context of `isLogged` in to true and otherwise to false
- The state of `isLogged` in is set in the `handleSubmit` function in the `LoginForm` component. This state is used in the following component:
  - `Dashboard` show the dashboard content when the state is `true`
  - `LoginForm` show different form messages depending on the state
  - `NavBarMenu` show `Login` or `Logout` depending on the state

## Installation

Start by cloning the repository:

`git clone git@github.com:CountNick/Unc-inc.-assessment.git`

Install the node modules:

`yarn install`

In the project directory, you can run:

`yarn start`

This runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

`yarn run build`

Builds the app for production to the `build` folder.
