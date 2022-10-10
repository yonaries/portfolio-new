import React from 'react'
import Image from 'next/image'
import { ahrefStyle } from '../NavBar'
import githubLogo from '../../assets/github.svg'
import twitterLogo from '../../assets/twitter.svg'
import linkedInLogo from '../../assets/linkedin.svg'
import photo from '../../assets/photo.png'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className='flex w-full text-white space-x-5 items-center pt-10'>
            <Image className='rounded-full' src={photo} width={40} height={40} alt='my photo' />
            <a className={ahrefStyle} href="https://www.twitter.com/yonathanDejene" target="_blank" rel="noopener noreferrer">
                <div className='flex items-center space-x-1'>
                    <Image src={twitterLogo} width={20} height={20} alt='twitter link' />
                    <p className='hidden md:block'>
                        twitter
                    </p>
                </div>
            </a>

            <a className={ahrefStyle} href="https://www.linkedin.com/in/yonathan-dejene" target="_blank" rel="noopener noreferrer">
                <div className='flex items-center space-x-1'>
                    <Image src={linkedInLogo} width={20} height={20} alt='linkedIn link' />
                    <p className='hidden md:block'>
                        linkedIn
                    </p>
                </div>
            </a>
            <a className={ahrefStyle} href="https://www.github.com/yonaries/" target="_blank" rel="noopener noreferrer">
                <div className='flex items-center space-x-1'>
                    <Image src={githubLogo} width={20} height={20} alt='github link' />
                    <p className='hidden md:block'>
                        github
                    </p>
                </div>
            </a>
        </footer>
    )
}

export default Footer