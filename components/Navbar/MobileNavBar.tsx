import React, { useEffect, useState } from 'react'

type Props = {
    title: string
}

const MobileNavBar = (props: Props) => {
    const [isActive, setIsActive] = useState(false)

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 600) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <div id='#mobile-navbar' className={`text-white z-10 py-5 tracking-widest sticky top-0 transition-all text-sm md:hidden ${isActive && 'bg-primaryBg drop-shadow-xl'}`}>
            <p>
                {props.title}
            </p>
        </div>
    )
}

export default MobileNavBar