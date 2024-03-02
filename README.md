# Widget Project

Coding test - Vue 3 + TypeScript + Vite + Pinia

## Extra Libraries

- Vitest (Testing) - Used to test React components
- Pinia - State management library

## Why Pinia? (Pinia vs Vuex)

- Vuex is a great library, but it has some limitations. It is not type-safe, and it is not easy to use with TypeScript.
- Pinia is a new state management library that is built with TypeScript in mind. It is easy to use, and it is type-safe.
- It also has a great developer experience, and it is easy to test.
- This project uses Pinia Setup Store, similar to the Vue 3 Composition API.

## Notes

- No CSS framework was used in this project. The CSS was written from scratch.
- Some design decisions were made to make the project look better.
- Transitions and animations were added to make the project look more professional and smooth.
- No external libraries were used for transitions and animations. Everything was written from scratch.
- No component library was used. All components were written from scratch.

## Run Locally

Clone the project

```bash
  git clone https://github.com/jtejederabit/widget-project
```

Go to the project directory

```bash
  cd widget-project
```

Install dependencies

```bash
  npm install
```

Start the server in dev mode

```bash
  npm run dev
```

Build the project

```bash
  npm run build
```

## Deployment

To deploy this project with Docker

```bash
  docker-compose up --build
```

## Base URL

In Dev mode

```bash
  http://localhost:5173
```

From Docker container

```bash
  http://localhost:80
```

## Run tests


```bash
  npm run test:unit
```
