import React from 'react'
import Image from 'next/image'
import { ahrefStyle } from './NavBar'
import githubLogo from '../assets/github.svg'
import twitterLogo from '../assets/twitter.svg'
import linkedInLogo from '../assets/linkedin.svg'
import photo from '../assets/1652460611504 1.png'

const AboutMe = () => {
    return (
        <div className='flex pt-20 pb-10 flex-col md:w-2/5 md:mr-10 text-secondary justify-between md:sticky md:top-0'>
            <div className='flex flex-col space-y-16 justify-around'>
                <div>
                    <p className='text-5xl text-white font-extrabold mb-5'>
                        Yonathan Dejene
                    </p>
                    <p className='text-xl text-white font-semibold'>Software Developer</p>
                </div>

                <div>
                    <p className='font-normal text-sm leading-7 md:pr-10' >
                        I'm currently studying a Computer Science at Unity University. I mostly work on full-stack development but I am more interested in backend development and Algorithms.
                        <span className='text-white underline'>Next.js</span> and <span className='text-white underline'>GraphQL</span> are the stacks I’m experiencing on now, and <span className='font-semibold text-white'>TYPESCRIPT</span> is my best friend.
                        <br /> <br /> FYI: when It comes to tech talk, I'm that guy who can't shut up.
                    </p>
                </div>
            </div>

            <footer className='flex text-white space-x-5 items-center pt-10'>
                <Image className='rounded-full' src={photo} width={40} height={40} alt='my photo' />
                <a className={ahrefStyle} href="https://www.twitter.com/yonathanDejene" target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center space-x-1'>
                        <Image src={twitterLogo} width={20} height={20} alt='twitter link' />
                        <p>
                            twitter
                        </p>
                    </div>
                </a>

                <a className={ahrefStyle} href="https://www.linkedin.com/in/yonathan-dejene" target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center space-x-1'>
                        <Image src={linkedInLogo} width={20} height={20} alt='linkedIn link' />
                        <p>
                            linkedIn
                        </p>
                    </div>
                </a>
                <a className={ahrefStyle} href="https://www.github.com/yonaries/" target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center space-x-1'>
                        <Image src={githubLogo} width={20} height={20} alt='github link' />
                        <p>
                            github
                        </p>
                    </div>
                </a>
            </footer>
        </div>
    )
}

export default AboutMe