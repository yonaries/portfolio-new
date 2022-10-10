import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import { useTheme } from '../contexts/ThemeContext'


const Home: NextPage = () => {
  const { bgPrimary, textPrimary } = useTheme();
  return (
    <>
      <Head>
        <title>Yonathan Dejene</title>
        <link rel="icon" href="/photo-rounded.png" />
        <meta charSet="UTF-8" />
        <meta name='robots' content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Full Stack Engineer experienced on building software for the Internet based In Addis Ababa, Ethiopia.. Skilled on Nodejs for backend, Next.js for frontend and GraphQL for API." />
      </Head>
      <div className={`lg:flex md:pl-20 lg:overflow-y-hidden px-6 max-w-hd h-screen justify-between font-lexend ${bgPrimary} ${textPrimary}`}>
        <NavBar />
        <AboutMe />
        <div className='lg:w-3/5 lg:pl-10 lg:pr-20 h-screen lg:overflow-y-scroll'>
          <Projects />
          <Experience />
        </div>
      </div></>
  )
}


export default Home
