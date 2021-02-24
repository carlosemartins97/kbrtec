import React from 'react';

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
    InfoListItem

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
            <LeftContent>
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

            <RightContent>
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
                                        <p>{item.year}</p>
                                        <InfoListItem>
                                            <small>{item.description}</small>
                                            <span>{item.price}</span>
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

