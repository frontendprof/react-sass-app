import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__left">
                        <img src="/images/logo.png" alt="logo"/>
                    </div>

                    <ul className="navbar__right">
                        <li>
                            <a href="/">Home</a>
                        </li>

                        <li>
                            <a href="/">Showcase</a>
                        </li>

                        <li>
                            <a href="/">About</a>
                        </li>

                        <li>
                            <a href="/">Portfolio</a>
                        </li>

                        <li>
                            <a href="/">Contact</a>
                        </li>

                        <li>
                            <a href="/"><i class="bi bi-search"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
