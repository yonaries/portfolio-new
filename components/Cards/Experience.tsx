import React from 'react'
import Link from 'next/link'

type Props = {
    name: string
    position?: number
}

const ExperienceCard = (props: Props) => {
    console.log(props.position);

    return (
        <article id='card' className={`${props.position! % 2 === 0 && ''} min-h-48 md:h-80 p-10 text-white bg-dusk transition-all md:hover:scale-110 hover:border-t-4 hover:border-amber-500 hover:z-10`}>
            <Link href='#'>
                <p>{props.name}</p>
            </Link>
        </article>
    )
}

export default ExperienceCard