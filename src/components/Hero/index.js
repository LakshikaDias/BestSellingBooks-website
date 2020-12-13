import React from 'react';
import NavBar from '../NavBar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
    HeroH1,
    HeroP,
} from './HeroElement';

const Hero = () => {
    return (
        <HeroContainer>
            <NavBar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        Most Populer Best Books Ever
                    </HeroH1>
                    <HeroP>Are you ready to see....</HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
