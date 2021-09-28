import React from 'react';
import {
    Container, 
    Heading,
    Paragraph, 
    Button, 
    MockupImage, 
    StatsContainer, 
    Stats, 
    StatsIcon, 
    StatsHeading, 
    StatsParagraph
} from './BuildTheCommunityStyles.js';
import mockupImage from '../../images/screen-mockups.svg';
import communitiesIcon from '../../images/icon-communities.svg';
import messagesIcon from '../../images/icon-messages.svg';

const BuildTheCommunity = () => {
    return (
        <Container>
            <Heading>Build The Community Your Fans Will Love</Heading>
            <Paragraph>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</Paragraph>
            <Button>Get Started For Free</Button>
            <MockupImage src={mockupImage} alt='mockup image' />
            <StatsContainer>
                <Stats>
                    <StatsIcon src={communitiesIcon} alt='communities icon' />
                    <StatsHeading>1.4k+</StatsHeading>
                    <StatsParagraph>Communities Formed</StatsParagraph>
                </Stats>
                <Stats>
                    <StatsIcon messages src={messagesIcon} alt='messages icon' />
                    <StatsHeading messages >2.7m+</StatsHeading>
                    <StatsParagraph messages >Messages Sent</StatsParagraph>
                </Stats>
            </StatsContainer>
        </Container>
    )
}

export default BuildTheCommunity;
