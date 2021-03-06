import React, {useState, useEffect} from 'react';
import {getStory} from '../services/hnApi'
import {StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from '../styles/StoryStyles'
import {mapTime} from '../mappers/mapTime'


export const Story = ({storyId}) => {

    const [story, setStory] = useState({});


    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    // eslint-disable-next-line
    },[]);
    return story && story.url ? (

        
        <StoryWrapper data-testid="story">
        <StoryTitle>

            <a href={story.url}> {story.title}</a> 
        </StoryTitle>


        <StoryMeta>
            <span> 
            <StoryMetaElement color="#adadad">Url:  </StoryMetaElement> {' '} {story.url}
            </span>
            
        </StoryMeta>

        <StoryMeta>
            <span>
            <StoryMetaElement color="#adadad">Posted:  </StoryMetaElement> {` `} 
            {mapTime(story.time)}
             </span>
            
        </StoryMeta>
        </StoryWrapper>
        
    ) : null ;
}