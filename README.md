Built with React + Vite + node 20.10

To Run:

#### From command line

```
npm install
npm run dev
```

#### With docker

```
docker build -t prequin-frontend .
docker run -p 3000:3000 prequin-frontend
```

All pretty basic but things should work if you have the API running locally at the same time.

#### Small Overview

Our main pages - one for the commitments of a single investor, one for a list of all investors - are defined in src/pages.

Those pages then use the components found in src/components

The commitments page is built from a Dropdown and a Table - the Investors page is just a table (and a heading).

I used chakra-ui's table components to give it a semblance of style.

Data fetching was done using react-query.

Basic testing was added to ensure the pages render correctly and display data.
