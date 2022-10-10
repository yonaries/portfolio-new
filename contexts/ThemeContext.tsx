import React, { useContext, useEffect, useState } from 'react'

interface ThemeType {
    darkTheme: boolean,
    bgPrimary: string,
    textPrimary: string,
    changeTheme: Function,
}
const initialState = {
    darkTheme: false,
    bgPrimary: '',
    textPrimary: '',
    changeTheme: () => { }
}

const ThemeContext = React.createContext<ThemeType>(initialState)

export const useTheme = () => {
    return useContext(ThemeContext);
}

const ThemeProvider = ({ children }: any) => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [bgPrimary, setBgPrimary] = useState<string>('')
    const [textPrimary, setTextPrimary] = useState<string>('')

    const changeTheme = (isOn: boolean) => {
        setDarkTheme(isOn)
        if (!isOn) window.localStorage.removeItem('darkTheme')
        else window.localStorage.setItem('darkTheme', `${darkTheme}`);
    }

    useEffect(() => {
        const checkTheme = () => {
            const theme = window.localStorage.getItem('darkTheme');
            if (darkTheme) {
                setDarkTheme(true)
                setBgPrimary('bg-dusk')
                setTextPrimary('text-white')

            }
            else {
                setDarkTheme(false)
                setBgPrimary('bg-white')
                setTextPrimary('text-dark')
            }
        }
        checkTheme();
        return checkTheme;
    }, [changeTheme])

    const value = {
        darkTheme: darkTheme,
        changeTheme: changeTheme,
        bgPrimary: bgPrimary,
        textPrimary: textPrimary,
    }

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;