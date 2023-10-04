import React from 'react'
import AngelBgAnimation from '../AngelBgAnimation'
import { AngelContainer, AngelBg, AngelLeftContainer, Img, AngelRightContainer, AngelInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './AngelStyle'
import AngelImg from '../../images/Angel.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const AngelSection = () => {
    return (
        <div id="about">
            <AngelContainer>
                <AngelBg>
                    <AngelBgAnimation />
                </AngelBg>
                <AngelInnerContainer >
                    <AngelLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </AngelLeftContainer>

                    <AngelRightContainer id="Right">

                        <Img src={AngelImg} alt="Angel-image" />
                    </AngelRightContainer>
                </AngelInnerContainer>

            </AngelContainer>
        </div>
    )
}

export default AngelSection