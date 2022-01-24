# The Hungry Muslim

A companion helping you search grocery products with indicative dietary suitability.

## Project Tour

The monorepo is organised into two projects:

1. `api-halaalfood` - A server-side API generating a json based response.
2. `web-thehungrymuslim` - A client-side web application using the API.

## Environment Setup
The API uses the [Dotenv](https://www.npmjs.com/package/dotenv) library to load sensitive data.

There is a `.env.example` file included at the root of the API project as an example, rename it to '.env' (.env is not under version control). Update the `.env` file with the pertinent information
for your project.

### Running the Projects

Perform the following for each project (some start commands may differ based on the project):

```shell
npm install
npm run build
npm run start
```
