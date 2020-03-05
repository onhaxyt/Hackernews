import styled from 'styled-components';

export const StoryWrapper = styled.section`

padding-top: 10px;
margin-bottom: 20px;
border-top: 1px solid #6d6e6e;

&:first-of-type {
    border-top: 0;
}

&:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
}

.StoryWrapper {
    transition: opacity 0.5s;
    opacity: 1;
}


`;

export const StoryTitle = styled.h1`

margin-bottom: 5px;
font-size: 18px;
line-hight: 1.8;
margin: 0;
text-decoration: none;

a {
    color: #2bc4c4;
    text-decoration: none;
}




`;

export const StoryMeta = styled.div`

font-style: italic;
color: #979999;




> span:not(:first-child):before {
    content: '•';
    margin: 0 7px;
}

.story__meta-bold {
    font-weight: bold;
}



`;

export const StoryMetaElement = styled.span`

font-weight: bold;
color: ${props => props.color || 'red'};

`;