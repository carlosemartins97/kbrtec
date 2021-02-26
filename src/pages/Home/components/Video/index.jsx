import React from 'react';

import {
    Container,
    ContentTitle,
    IframeTag,
} from './styles';

const Video = () => {
    return (
        <Container>
            <ContentTitle>
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum:
            </ContentTitle>

            <IframeTag src="https://www.youtube.com/embed/0Gi-cSZetDY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IframeTag>
        </Container>
    )
}

export default Video;