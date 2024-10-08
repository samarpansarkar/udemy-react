import React from 'react'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
    return (
        <div>
            <MainNavigation />
            <main>
                <h1>An error occurred!</h1>
                <p>Could not find this page.</p>
            </main>
        </div>
    )
}

export default ErrorPage;
