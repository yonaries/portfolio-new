import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import star from '../../assets/Star.svg';



type Props = {
    tech: string[];
    title: string;
    description: string;
}

const ProjectCard = (props: Props) => {
    return (
        <article id='card' className='min-h-48 bg-dusk text-white p-10 w-full flex flex-col justify-between my-2 transition-all md:hover:scale-110'>
            <Link href="#">
                <a>
                    <div className='space-y-2'>
                        <p className='text-2xs font-semibold' id='cardTitle'>TYPESCRIPT, REACT</p>
                        <p className='text-2xl font-semibold'>nest-stock</p>
                        <p className='text-sm text-secondary'>📈 Nest Stock is web app that provides a
                            real time stock market data, finance news.</p>
                    </div>
                    <div className='flex pt-5 space-x-1'>
                        <Image src={star} width={15} height={15} alt='github star' />
                        <p className='text-xs text-secondary' id='star'>5,789</p>
                    </div>
                </a>
            </Link>
        </article>
    )
}

export default ProjectCard