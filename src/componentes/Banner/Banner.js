import { Fragment } from 'react';
import './Banner.css';

export const Banner = () => {
    //Apesar de parecer, não é HTML. É JSX
    return (
        //Fragments
        <>
            <header className="banner">    
                <img src="/imagens/banner.png" alt="Banner principal da página Organo"/>
            </header>
        </>
    )
}

export default Banner