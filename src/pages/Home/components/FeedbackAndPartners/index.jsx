import React from 'react';

import firstImg from '../../../../core/assets/feedback/img1.png'
import secondImg from '../../../../core/assets/feedback/img2.png'
import thirdImg from '../../../../core/assets/feedback/img3.png'

import globo from '../../../../core/assets/partners/globo.png'
import oglobo from '../../../../core/assets/partners/oglobo.png'
import cbn from '../../../../core/assets/partners/cbn.png'
import g1 from '../../../../core/assets/partners/g1.png'
import negocios from '../../../../core/assets/partners/negocios.png'
import uol from '../../../../core/assets/partners/uol.png'
import vendamais from '../../../../core/assets/partners/vendamais.png'
import bandnews from '../../../../core/assets/partners/bandnews.png'

import Rectangle from '../../../../core/components/Rectangle';

import {
    Container,
    Feedback,
    Partners,
    Content,
    Title,
    Description,
    VideoArea,
    PartnersArea,
    ImageContainer,
    BackgroundDetails
} from './styles';

const FeedbackAndPartners = () => {

    const allPartnersImages = [
        {name: 'globo', img: globo, delay: 600},
        {name: 'uol', img: uol, delay: 700},
        {name: 'cbn', img: cbn, delay: 800},
        {name: 'g1', img: g1, delay: 900},
        {name: 'bandnews', img: bandnews, delay: 1000},
        {name: 'oglobo', img: oglobo, delay: 1100},
        {name: 'vendamais', img: vendamais, delay: 1200},
        {name: 'negocios', img: negocios, delay: 1300},
    ]

    return (
        <Container>
            <BackgroundDetails>
                <Rectangle />
            </BackgroundDetails>
            <Feedback data-aos="slide-right">
                <Content>
                    <Title>
                        Depoimentos
                    </Title>

                    <Description>
                        quae ab illo inventore veritatis et quasi a
                        rchitecto beatae vitae dicta sunt explicabo. 
                        Nemo enim ipsam voluptatem quia.
                    </Description>

                    <VideoArea>
                        <img src={firstImg} loading="lazy" alt="vídeo 1"/>
                        <img src={secondImg} loading="lazy" alt="vídeo 2"/>
                        <img src={thirdImg} loading="lazy" alt="vídeo 3"/>
                    </VideoArea>
                    

                </Content>
            </Feedback>

            <Partners data-aos="slide-left">
                <Content>
                    <Title>
                        LOREM IPSUM
                    </Title>

                    <Description>
                        Sed ut perspiciatis unde omnis iste natus error 
                        sit voluptatem accusantium doloremque laudantium: 
                    </Description>

                    <PartnersArea>
                        {allPartnersImages.map(item => {
                            return (
                                <ImageContainer key={item.name}>
                                    <img src={item.img} loading="lazy" alt={item.name}/>
                                </ImageContainer>
                            )
                        })}
                    </PartnersArea>
                </Content>
            </Partners>
        </Container>
    )
}

export default  FeedbackAndPartners;