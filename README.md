# Just another Todo app...

## About

This is a standard Todo app, that organizes todos inside lists, with authentication process.

BE is a REST server created with Express and MongoDB,</br>
FE is a Create-React-App web app, using Redux as local store, redux-thunk for API calls,
SCSS and Styled-Components for styling (For studying purposes).

## Run

Run the server with:

```bash
    cd serverREST && node app.js
```

and run the app with:

```bash
    npm start
```

## Gaps

1. Deleting list from DB doesn't delete all it's todos.
2. Loading state is not applicable on authentication pages.
3. Lists are not connected to specific users, all users can see all lists.

## Refactor

1. Turn all styling to CSS modules
2. Organize a better file structure
3. Use React Hooks and function components when possible, remove legacy lifecycle methods.
4. Use react-redux Hooks instead of connect.
