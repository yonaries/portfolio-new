import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutMe from '../components/AboutMe'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Yonathan Dejene</title>
      </Head>
      <div className='flex h-screen py-8 pt-20 px-20 overflow-hidden justify-between'>
        <NavBar />
        <AboutMe />
        <div className='w-3/5 pl-10 h-screen pt-20 overflow-scroll'>
          <Projects />
        </div>
      </div></>
  )
}


export default Home
