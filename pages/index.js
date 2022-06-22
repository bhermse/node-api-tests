import Head from "next/head";
import Image from "next/image";
import IPAPILookup from "../components/IPAPILookup";
import PostsLookup from "../components/PostsLookup";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 30,
});

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>API Examples</title>
        <meta name="description" content="Test several APIs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>API Examples</h1>

        <h2>
          <a href="https://ipapi.co/json/" target="_blank" rel="noopener noreferrer">
            IP API
          </a>
        </h2>
        <IPAPILookup apiData={props.apiData} />

        <h2>
          <a href="https://jsonplaceholder.typicode.com/posts" target="_blank" rel="noopener noreferrer">
            &#123;JSON&#125; Placeholder
          </a>
        </h2>
        <PostsLookup />
      </main>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const api = axios.create({
    adapter: cache.adapter,
  });

  const accessKey = process.env.IP_API_KEY;
  const ipData = await api({ url: `http://api.ipapi.com/api/check?access_key=${accessKey}`, method: "GET" });

  const IP_API_URL = `http://api.ipapi.com/${ipData.data.ip}?access_key=${accessKey}`;
  const apiData = await api({ url: IP_API_URL, method: "GET" });

  console.log("fetched ip data");

  return {
    props: { apiData: apiData.data },
  };
}
