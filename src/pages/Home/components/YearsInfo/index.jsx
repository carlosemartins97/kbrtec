import React from 'react';

import Rectangle from '../../../../core/components/Rectangle';

import {
    Container,
    LeftContent,
    RightContent,
    Dollar,
    InfoContent,
    InfoHeader,
    List,
    ListItem,
    ListContent,
    InfoListItem,
    BackgroundDetails

} from './styles';

const YearsInfo = () => {
    const yearsData = [
        {year: 2018, description: 'Lorem ipsum dolor', price: 'R$ 15.000,00'},
        {year: 2015, description: 'Lorem dolor ipsum', price: 'R$ 6.000,00'},
        {year: 2010, description: 'Ipsum lorem dolor', price: 'R$ 2.000,00'},
        {year: 2008, description: 'Dolor ipsum lorem', price: 'R$ 800,00'},
    ]

    return (
        <Container>
            <LeftContent data-aos="slide-right">
                <BackgroundDetails>
                    <Rectangle />
                    <Rectangle />
                </BackgroundDetails>
                <h2>type specimen book. It has survive</h2>

                <p>
                    <span>Lorem Ipsum dolor</span> to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.             
                </p>
                <p>
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </LeftContent>


            <RightContent data-aos="slide-left">
                <Dollar>
                    $
                    <span>$</span>
                </Dollar>

                <InfoContent>
                    <InfoHeader>
                        <h2>
                            Mecently with desktop publishing software like :
                        </h2>

                        <Dollar>
                            $
                            <span>$</span>
                        </Dollar>
                    </InfoHeader>
                    
                    <List>
                        
                        {
                            yearsData.map(item => {
                                return (
                                    <ListItem key={item.year}>
                                        <ListContent>
                                            <span>...</span>
                                            <h2>{item.year}</h2>
                                            <InfoListItem>
                                                <small>{item.description}</small>
                                                <h3>{item.price}</h3>
                                            </InfoListItem>
                                        </ListContent>
                                    </ListItem>
                                )
                            })
                        }
                    </List>

                </InfoContent>
            </RightContent>
        </Container>
    );
};

export default YearsInfo;

