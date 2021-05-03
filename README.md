# react-sydney-2021-stack

Demo content for my talk at React Sydney, May 2021.

## Running the app

Clone the repo, run `yarn` to install dependencies, then `yarn dev` to start the dev server.

Open [localhost:3000](http://localhost:3000) for the website, and [localhost:8000](http://localhost:8000) for the KeystoneJS Admin UI.

## Recap

I presented my favourite stack for creating a website / app:

- [Next.js](https://nextjs.org)
- [KeystoneJS](https://next.keystonejs.com)
- [Tailwind](https://tailwindcss.com)

In the talk I went through a step-by-step live demo of how to put a simple website for React Sydney together, from scratch. It includes:

- Setting up Next.js and the two pages we want to render
- Adding some styles with Tailwind
- Setting up a Keystone project with SQLite and two lists (talks and speakers)
- Integrating the content with the front-end using Keystone's Node API and Next's static APIs
- Using the new KeystoneJS Document field
- Adding a GraphQL API to the Next.js app for front-end queries in production

... then I wrapped up by deploying to Vercel: [react-sydney-2021-stack.vercel.app](react-sydney-2021-stack.vercel.app)

## Follow Along

If you want to reproduce the steps in my live demo, see the `steps` folder for (light) instructions; or you can see the original steps in the [commit history](https://github.com/JedWatson/react-sydney-2021-stack/commits/main)

> Note that I rolled back the solution just before the talk, followed by a bunch of WIP commits, so I could push it live from the git repo at the end. You can ignore those 🙂

## About the deployment

This scenario of using Keystone means that I'm using an SQLite database, committed into git (so it gets included in the Vercel deployment). The GraphQL API is then read-only in production, and content changes need to be made locally and commited (as you would with, say, markdown content for a blog website).

In a more serious production envronment you would use a proper server for the GraphQL API, and a Postgres database, both of which Keystone support.

## License

MIT. Copyright (c) Jed Watson 2021. All rights Reserved.
