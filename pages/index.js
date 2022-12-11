import Head from 'next/head'
import Navbar from '../pages/components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Isaac Sun Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <Navbar/>
    </div>
  )
}