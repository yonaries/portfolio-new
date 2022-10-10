import type { NextPage } from 'next'
import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yonathan Dejene - Software Developer</title>
        <meta charSet="UTF-8" />
        <meta name='robots' content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Full Stack Engineer experienced on building software for the Internet based In Addis Ababa, Ethiopia.. Skilled on Nodejs for backend, Next.js for frontend and GraphQL for API." />
      </Head>
      <div className='px-6 max-w-hd h-screen justify-between font-lexend md:flex md:pl-20 md:overflow-y-hidden '>
        <NavBar />
        <AboutMe />
        <div className='md:w-3/5 md:pl-10 md:pr-20 h-screen md:overflow-y-scroll'>
          <Projects />
        </div>
      </div></>
  )
}


export default Home
