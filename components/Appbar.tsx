import react from 'react'
import SignInbutton from './SignInbutton'

const Appbar = () => {
    return (
        <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
            <SignInbutton/>
        </header>
    )
}