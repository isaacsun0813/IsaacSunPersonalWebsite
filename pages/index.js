import Head from 'next/head'
import Navbar from '../pages/navbar'
import Main from '../pages/FrontPage'
import AboutMe from '../pages/AboutMe'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Isaac Sun Website</title> d
      </Head> 
      <Navbar/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
};
