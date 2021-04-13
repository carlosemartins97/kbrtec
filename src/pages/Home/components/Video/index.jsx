import React from 'react';

import {
    Container,
    ContentTitle,
    IframeTag,
} from './styles';

const Video = () => {
    return (
        <Container>
            <ContentTitle data-aos="fade-down">
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum:
            </ContentTitle>

            <IframeTag src="https://www.youtube.com/embed/0Gi-cSZetDY" loading="lazy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IframeTag>

            <a href="#topo">Voltar ao topo</a>
        </Container>
    )
}

export default Video;