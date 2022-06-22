This is a [Next.js](https://nextjs.org/) project meant to test several different APIs

## Getting Started

First checkout this project and copy the `.sample-env` renaming it to `.env`. Add your own [IP API key](https://ipapi.com/quickstart).

Then install dependencies and start the app with:

```bash
npm install
npm run dev
# or
yarn dev
```

--------------

Open [http://localhost:3000](http://localhost:3000) with your browser.

You will see location information from IP API along with sample posts from [{JSON} Placeholder](https://jsonplaceholder.typicode.com/).

Posts from {JSON} Placeholder will refresh every minute.

### TODO:

- Have part of the home page template server-rendered and part of it dynamic. Currently IP data is fetched server-side but the template is built client-side along with post data.
- Server-side caching of IP lookup should be switched to Redis. See [note](https://www.npmjs.com/package/axios-cache-adapter) about Axios in-memory caching for Node. Also Consider switching to [node-fetch-cache](https://www.npmjs.com/package/node-fetch-cache) rather than using Axios.