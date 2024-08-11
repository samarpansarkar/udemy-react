import { Link, useNavigate } from 'react-router-dom';

import React from 'react'

const Home = () => {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }
    return (
        <div>
            <h1>My home page</h1>
            <p>go to <Link to='/products'> my Products page</Link></p>
            <p>
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </div>
    )
}

export default Home;
