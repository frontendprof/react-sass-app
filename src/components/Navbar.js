import React from 'react';

import logoPng from "../images/logo.png"

const Navbar = () => {
    const [state,setState]=React.useState(false);

    const handleScroll=()=>{
        if(window.scrollY>80){
            setState(true)
        }else{
            setState(false)
        }
        // console.log(window.scrollY);
    }

    React.useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[])




    return (
        <div className={`navbar ${state ?"whiteBg":"transparent"}`}>
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__left">
                        <img src={logoPng} alt="logo" />
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
