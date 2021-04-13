import React from 'react';

import Button from '../../../../../core/components/Button';

import {
    Container,
    ContentList,
    ListItem,
    ContentSubtitle,
    ContentInfo,
} from './styles';
import CorrectCircle from '../../../../../core/components/CorrectCircle';

const RightContent = () => {

    const ContentListInfo = [
        {msg: 'On the other hand, we denounce'},
        {msg: 'With righteous indignation'},
        {msg: 'Dislike men who are so beguiled'},
        {msg: 'Demoralized by the charms of pleasure'},
    ]
    
    return (
        <Container data-aos="slide-left">
            <h2>Versions of Lorem IpsumLetraset sheets</h2>
            <ContentSubtitle>
                Awill uncover many red alteration in some form, by injected
            </ContentSubtitle>

            <ContentList>
                {ContentListInfo.map(item => {
                    return (
                        <ListItem key={item.msg}>
                            <CorrectCircle /> {item.msg}
                        </ListItem>
                    )
                })}
            </ContentList>

            <ContentInfo>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature 
                from 45 BC, making it over 2000 years old. Richard McClintock.
            </ContentInfo>

            <ContentInfo>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. The standard chunk of 
                Lorem Ipsum used since the 1500s is reproduced below for those interested.Many desktop publishing packages and web page 
                editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            </ContentInfo>

            <ContentInfo>   
                You are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
                hidden in the middle of text. All the Lorem Ipsum generators.
            </ContentInfo>
            
            <ContentSubtitle>
                is simply dummy text simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            </ContentSubtitle>

            <Button>
                It is a long establish
            </Button>
        </Container>
    )
}

export default RightContent;