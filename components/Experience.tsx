import Link from 'next/link'
import React from 'react'
import ExperienceCard from './Cards/Experience'
import MobileNavBar from './Navbar/MobileNavBar'

const Experience = () => {
    const titles = ['acadc', 'avawfvsf', 'fvadvadv', 'avadvadv', 'advadva']

    return (
        <div>
            <MobileNavBar title='Experience' />
            <div id='experience' className='md:grid md:grid-cols-2 md:pt-10 md:space-x-2 space-y-2 '>
                {titles.map((t, idx) => <ExperienceCard key={idx} position={idx} name={t} />)}
                <article id='card' className={`min-h-48 md:h-80 p-10 text-white bg-dusk transition-all md:hover:scale-110 hover:border-t-4 hover:border-amber-500 hover:z-10`}>
                    <Link href='#'>
                        <p>More</p>
                    </Link>
                </article>
            </div>
        </div>
    )
}

export default Experience