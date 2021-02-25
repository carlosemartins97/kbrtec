import React from 'react';

import Rectangle from '../../../../core/components/Rectangle';

import infoImg from '../../../../core/assets/business2.png';

import training from '../../../../core/assets/grid-images/training.png';
import talk1Img from '../../../../core/assets/grid-images/talk1.png';
import talk2Img from '../../../../core/assets/grid-images/talk2.png';
import seminario from '../../../../core/assets/grid-images/seminario1.png';
import presentation from '../../../../core/assets/grid-images/presentation1.png';

import {
    Container,
    Content,
    Grid,
    ContentTitle,
    ContentDescription,
    GridTitle,
    GridContent,
    GridItem,


} from './styles';

const SecondInfo = () => {

    const gridData = [
        {img: training, name: 'Palestras'},
        {img: talk1Img, name: 'Atendimento Individual'},
        {img: talk2Img, name: 'Treinamentos e Workshops'},
        {img: seminario, name: 'Programas de Formação'},
        {img: presentation, name: 'Consultoria de Gestão'},
    ]

    return (
        <Container>
            <Content>
                <ContentTitle>
                    <Rectangle>
                        <img src={infoImg} alt=""/>
                    </Rectangle>

                    <h2>containing Lorem Ipsum passages</h2>
                </ContentTitle>

                <ContentDescription>
                    <p>
                        Letraset sheets containing Lorem Ipsum passages, and more recently with 
                        desktop publishing software like Aldus PageMaker including versions of Lorem 
                        IpsumLetraset sheets containing Lorem Ipsum passages, and more recently with desktop 
                        publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </ContentDescription>
                
            </Content>

            <Grid>
                <GridTitle>
                    A like Aldus PageMaker including
                </GridTitle>
                <GridContent>
                    {
                        gridData.map(item => {
                            return (
                                <GridItem key={item.name}>
                                    <Rectangle>
                                        <img src={item.img} alt={item.name}/>
                                    </Rectangle>
                                    <span>{item.name}</span>
                                </GridItem>
                            )
                        })
                    }
                </GridContent>
            </Grid>
        </Container>
    )
};

// gridData.map(item => {
//     return (
//         (
//             <GridItem key={item.name}>
//                 <Rectangle>
//                     <img src={`${item.img}`} alt={item.name}/>
//                 </Rectangle>
//                 <span>{item.name}</span>
//             </GridItem>
//         )
//     )
// })

export default SecondInfo;