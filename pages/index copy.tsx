/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import type { NextPage } from "next";
import Head from "next/head";


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-xl font-bold">Welcome to next</h1>
    </div>
  );
};

export default Home;
