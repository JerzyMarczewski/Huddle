import React from 'react';
import {
    WaveTopMobile,
    WaveBottomMobile,
    Container, 
    Illustration, 
    TextContainer, 
    Heading, 
    Paragraph
} from './GrowTogetherStyles';

import waveTopMobileImage from '../../images/bg-section-top-mobile-1.svg';
import waveBottomMobileImage from '../../images/bg-section-bottom-mobile-1.svg';
import illustrationImage from '../../images/illustration-grow-together.svg';

const GrowTogether = () => {
    return (
        <>
            <WaveTopMobile src={waveTopMobileImage} />
            {/* <WaveTopDesktop /> */}
            <Container>
                <Illustration src={illustrationImage} />
                <TextContainer>
                    <Heading>Grow Together</Heading>
                    <Paragraph>
                    Generate meaningful discussions with your audience and 
                    build a strong, loyal community. Think of the insightful 
                    conversations you miss out on with a feedback form.
                    </Paragraph>
                </TextContainer>
            </Container>
            <WaveBottomMobile src={waveBottomMobileImage} />
            {/* <WaveBottomDesktop /> */}
        </>
    )
}

export default GrowTogether;
