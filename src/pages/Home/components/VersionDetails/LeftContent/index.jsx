import React from 'react';

import Rectangle from '../../../../../core/components/Rectangle';
import correctImg from '../../../../../core/assets/correct.png';

import {
    Container,
    FirstHalf,
    SecondHalf,
    ContentList,
    ListItem,
    InfoTranslation,
    LastInfo,
    ContentSubtitle,
    ContentInfo,
} from './styles';

const LeftContent = () => {

    const ContentListInfo = [
        {msg: 'On the other hand, we denounce'},
        {msg: 'With righteous indignation'},
        {msg: 'Dislike men who are so beguiled'},
        {msg: 'Demoralized by the charms of pleasure'},
    ]
    const InfoTranslationList = [
        {msg: 'Tenetur a sapiente delectus'},
        {msg: 'Taque earum rerum hic'},
        {msg: 'Beguiled and demoralized'},
    ]
    
    return (
        <Container>
            <FirstHalf>
                <h2>Versions of Lorem IpsumLetraset sheets</h2>
                <ContentSubtitle>
                    publishing software like
                </ContentSubtitle>

                <ContentInfo>
                    Letraset sheets containing Lorem Ipsum passages, and more 
                    recently with desktop publishing software like Aldus PageMaker 
                    including versions of Lorem IpsumLetraset
                </ContentInfo>
                <ContentInfo>
                    Letraset sheets containing Lorem Ipsum passages, and more recently 
                    with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem IpsumLetraset.
                </ContentInfo>
                <ContentList>
                    {ContentListInfo.map(item => {
                        return (
                            <ListItem key={item.msg}>
                                <Rectangle><img src={correctImg} alt="Imagem com a letra V, insinuando algo correto."/></Rectangle> {item.msg}
                            </ListItem>
                        )
                    })}
                </ContentList>
                <span>Tenetur a sapient</span>
            </FirstHalf>

            <SecondHalf>
                <InfoTranslation>

                    <ContentSubtitle>
                        1914 translation by H. Rackham
                    </ContentSubtitle>

                    <ContentList>
                        {InfoTranslationList.map(item => {
                            return (
                                <ListItem key={item.msg}>
                                    <Rectangle><img src={correctImg} alt="Imagem com a letra V, insinuando algo correto."/></Rectangle> {item.msg}
                                </ListItem>
                            )
                        })}
                    </ContentList>
                </InfoTranslation>

                <LastInfo>

                    <ContentSubtitle>
                        Richard McClintock, a Latin : 
                    </ContentSubtitle>

                    <ContentInfo>
                        Letraset sheets containing Lorem Ipsum passages, and more recently with 
                        desktop publishing software like Aldus PageMaker including versions 
                        of Lorem IpsumLetraset.
                    </ContentInfo>
                </LastInfo>
            </SecondHalf>
        </Container>
    )
}

export default LeftContent;