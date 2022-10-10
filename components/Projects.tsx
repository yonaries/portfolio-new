import React from 'react'
import Image from 'next/image'
import star from '../assets/Star.svg';


const Projects = () => {
    return (
        <div className='pt-20' id='projects'>
            <div id='card' className='min-h-48 bg-dusk text-white p-10 w-full flex flex-col justify-between my-2 transition-all hover:scale-110'>
                <div className='space-y-2'>
                    <p className='text-2xs font-semibold' id='cardTitle'>TYPESCRIPT, REACT</p>
                    <p className='text-2xl font-semibold'>cyllo</p>
                    <p className='text-sm text-secondary'>Open-source shared code snippet library to boost your productivity</p>
                </div>
                <div className='flex pt-2 space-x-1'>
                    <Image src={star} width={15} height={15} />
                    <p className='text-xs text-secondary font-cousine' id='star'>5,789</p>
                </div>
            </div>
            <div id='card' className='h-48 bg-dusk text-white p-10 w-full flex flex-col justify-between my-2 transition-all hover:scale-110'>
                <div className='space-y-2'>
                    <p className='text-2xs font-semibold' id='cardTitle'>TYPESCRIPT, REACT</p>
                    <p className='text-2xl font-semibold'>nest-stock</p>
                    <p className='text-sm text-secondary'>📈 Nest Stock is web app that provides a
                        real time stock market data, finance and business news.</p>
                </div>
                <div className='flex pt-2 space-x-1'>
                    <Image src={star} width={15} height={15} alt='github link' />
                    <p className='text-xs text-secondary' id='star'>5,789</p>
                </div>
            </div>
            <div id='card' className='h-48 bg-dusk text-white p-10 w-full flex flex-col justify-between my-2 transition-all hover:scale-110'>
                <div className='space-y-2'>
                    <p className='text-2xs font-semibold' id='cardTitle'>TYPESCRIPT, REACT</p>
                    <p className='text-2xl font-semibold'>nest-stock</p>
                    <p className='text-sm text-secondary'>📈 Nest Stock is web app that provides a
                        real time stock market data, finance news.</p>
                </div>
                <div className='flex pt-2 space-x-1'>
                    <Image src={star} width={15} height={15} alt='github star' />
                    <p className='text-xs text-secondary' id='star'>5,789</p>
                </div>
            </div>
            <div id='card' className='h-48 bg-dusk text-white p-10 w-full flex flex-col justify-between my-2 transition-all hover:scale-110'>
                <div className='space-y-2'>
                    <p className='text-2xs font-semibold' id='cardTitle'>TYPESCRIPT, REACT</p>
                    <p className='text-2xl font-semibold'>nest-stock</p>
                    <p className='text-sm text-secondary'>📈 Nest Stock is web app that provides a
                        real time stock market data, finance news.</p>
                </div>
                <div className='flex pt-2 space-x-1'>
                    <Image src={star} width={15} height={15} alt='github star' />
                    <p className='text-xs text-secondary' id='star'>5,789</p>
                </div>
            </div>
            <div id='card' className='h-48 bg-dusk text-white p-10 w-full flex flex-col justify-between my-2 transition-all hover:scale-110'>
                <div className='space-y-2'>
                    <p className='text-2xs font-semibold' id='cardTitle'>TYPESCRIPT, REACT</p>
                    <p className='text-2xl font-semibold'>nest-stock</p>
                    <p className='text-sm text-secondary'>📈 Nest Stock is web app that provides a
                        real time stock market data, finance news.</p>
                </div>
                <div className='flex pt-2 space-x-1'>
                    <Image src={star} width={15} height={15} alt='github star' />
                    <p className='text-xs text-secondary' id='star'>5,789</p>
                </div>
            </div>
        </div>
    )
}

export default Projects