import React from 'react'

const AboutMe = () => {
    return (
        <div className='flex flex-col w-2/5 mr-10 text-secondary justify-between sticky top-0'>
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
                <a href="#">twitter</a>
                <a href="#">linkedIn</a>
                <a href="#">github</a>
            </footer>
        </div>
    )
}

export default AboutMe