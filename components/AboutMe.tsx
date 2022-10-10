import React from 'react'
import Footer from './AboutMe/footer'

const AboutMe = () => {
    return (
        <div className='flex pt-20 pb-10 flex-col lg:w-2/5 lg:mr-10 text-secondary justify-between lg:sticky lg:top-0'>
            <div className='flex flex-col space-y-16 justify-around'>
                <div>
                    <p className='text-5xl text-white font-extrabold mb-5'>
                        Yonathan Dejene
                    </p>
                    <p className='text-xl text-white font-semibold'>Software Developer</p>
                </div>

                <div>
                    <p className='font-normal text-sm leading-7 lg:pr-10' >
                        Currently studying a Computer Science at Unity University. I mostly work on full-stack development but I am more interested in backend development and Algorithms.
                        <span className='text-white underline'>Next.js</span> and <span className='text-white underline'>GraphQL</span> are the stacks I’m experiencing on now, and <span className='font-semibold text-white'>TYPESCRIPT</span> is my best friend.
                        <br /> <br /> FYI: when It comes to tech talk, I'm that guy who can't shut up.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutMe