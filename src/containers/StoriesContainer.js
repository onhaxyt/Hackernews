import React, {useEffect, useState} from 'react';
import {getStoryIds} from '../services/hnApi';
import { Story } from '../components/story';
import { GlobalStyle, StoryContainerWrapper } from "../styles/StoryContainerStyles";
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';


export const StoriesContainer = () => {

    const [StoryIds, setStoryIds] = useState([]);
    const { count } = useInfiniteScroll();
  
    useEffect(() => {
      getStoryIds().then(ids => setStoryIds(ids));
    }, [
    ]);

   
  
    return (
    
        <>
    <GlobalStyle /> 
    <StoryContainerWrapper data-test-id="story-conatiner"> 
    <h1>Hacker News</h1>
    {StoryIds.slice(0, count).map(storyId => (
        
       

            <Story key={storyId} storyId = {storyId} />
            
            ))}
        
        
        
    </StoryContainerWrapper>
    
  </>);
  }