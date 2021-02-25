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

import {
    Container,
    Feedback,
    Partners,
    Content,
    Title,
    Description,
    VideoArea,
    PartnersArea,
    ImageContainer
} from './styles';

const FeedbackAndPartners = () => {

    const allPartnersImages = [
        {name: 'globo', img: globo},
        {name: 'uol', img: uol},
        {name: 'cbn', img: cbn},
        {name: 'g1', img: g1},
        {name: 'bandnews', img: bandnews},
        {name: 'oglobo', img: oglobo},
        {name: 'vendamais', img: vendamais},
        {name: 'negocios', img: negocios},
    ]

    return (
        <Container>
            <Feedback>
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
                        <img src={firstImg} alt=""/>
                        <img src={secondImg} alt=""/>
                        <img src={thirdImg} alt=""/>
                    </VideoArea>
                    

                </Content>
            </Feedback>

            <Partners>
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
                                    <img src={item.img} alt={item.name}/>
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