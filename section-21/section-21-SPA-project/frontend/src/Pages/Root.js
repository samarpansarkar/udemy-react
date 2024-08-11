import { Outlet, useNavigation } from "react-router-dom";
import React from 'react'
import MainNavigation from '../components/MainNavigation';

const Root = () => {
    // const navigation = useNavigation();
    return (
        <div>
            <MainNavigation />
            <main>
                {/* {navigation.state === 'loading' && <p>Loading..........</p>} */}
                <Outlet />
            </main>
        </div>
    )
}

export default Root
