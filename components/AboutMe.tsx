import React from 'react'
import Image from 'next/image'
import { ahrefStyle } from './NavBar'
import githubLogo from '../assets/github.svg'
import twitterLogo from '../assets/twitter.svg'
import linkedInLogo from '../assets/linkedin.svg'

const AboutMe = () => {
    return (
        <div className='flex pt-20 pb-10 flex-col w-2/5 mr-10 text-secondary justify-between sticky top-0'>
            <div className='flex flex-col h-4/5 justify-around'>
                <div>
                    <p className='text-5xl text-white font-extrabold mb-5'>
                        Yonathan Dejene
                    </p>
                    <p className='text-xl text-white font-semibold'>Software Developer</p>
                </div>

                <div>
                    <p className='font-normal text-sm leading-7 pr-10' >
                        I'm currently studying a Computer Science at Unity University. I mostly work on full-stack development but I am more interested in back-end development and Algorithms. <span className='text-white underline'>React.js</span> and <span className='text-white underline'>Express.js</span> are the stacks I’m experiencing on, and <span className='font-semibold text-white'>TYPESCRIPT</span> is my best friend.
                        <br /> <br /> FYI: when It comes to tech talk, I’m that guy who can’t shut up.
                    </p>
                </div>
            </div>

            <footer className='flex space-x-5'>
                <a className={ahrefStyle} href="https://www.twitter.com/yonathanDejene" target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center space-x-1'>
                        <Image src={twitterLogo} width={20} height={20} />
                        <p>
                            twitter
                        </p>
                    </div>
                </a>

                <a className={ahrefStyle} href="https://www.linkedin.com/in/yonathan-dejene" target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center space-x-1'>
                        <Image src={linkedInLogo} width={20} height={20} />
                        <p>
                            linkedIn
                        </p>
                    </div>
                </a>
                <a className={ahrefStyle} href="https://www.github.com/yonaries/" target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center space-x-1'>
                        <Image src={githubLogo} width={20} height={20} />
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