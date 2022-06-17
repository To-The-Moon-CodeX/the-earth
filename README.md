# Front-end

---

### ----Purpose and description  here----

# Documentation

---

# Technologies

- [JavaScript](https://www.w3schools.com/js/)
- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)

# Local Development
---

## Getting Started

## Check the project structure

### Design pattern
* components: Custom components like buttons, textinputs 
* containers/features: features like sign up or sign in
* containers/frameworks: Navigation bar, centerer
* helpers: Reusable functions
* hooks: Custom hooks
* services: communication with API
* views: main views


### Clone the project 

```
git clone git@github.com:To-The-Moon-CodeX/front-end.git
```

### Install dependencies
```
yarn install
```

### Next.js application

First, run the development server:

```
yarn dev
```

And the Expo Developer Tool at http://localhost:3000



# Naming Conventions

Case types:

- kebab-case
- camelCase
- PascalCase
- snake_case

# Pages

- PascalCase

# Components

- Component name should be PascalCase
- Component property names should be camelCase
  - Use 'on' prefix for event handlers. Example 'onClick' (corresponding function should be called 'handleClick')

# Functions

- camelCase
- functions that are event handlers should use the 'handle' prefix. Example: 'handleClick' (for handling the onClick event)

# Branch names

Branches should be lower case only. Dash for space (kebab-case). Prefixed by type / short descriptive name.

Possible types

- **feat**: New features or functionality
- **fix**: Fixes

Example:
`fix/button-component`
`feat/add-favorites`

# Pull Requests names and commit messages

Should include type, short name. Spaces in description are ok.

Example:
`fix[24]: [description]`

Example without issue number:
`feat: [description]`





# [Link to server](https://github.com/To-The-Moon-CodeX/back-end)