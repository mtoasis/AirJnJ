import styled from 'styled-components';

export const Container = styled.div`
    width: 350px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    height: 85px;
    white-space: normal;
    max-height: 126px;
    flex-direction: row;
    justify-content: flex-start;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(0,0,0,0.2);
    border-radius: 12px;
`

export const ImageContainer = styled.div`
    width:25%;
    background-position:center;
    background-size:cover;
    background-image: url(${(props)=>(props.option)});
    padding-top:20px;
    margin-left: -1px; 
    margin-right: -1px;
    min-width: 126px; 
    border-top-left-radius: 8px !important;
    border-bottom-left-radius: 8px !important;
    border-top-right-radius: 0px !important;
    overflow: hidden !important;

`
export const TextContainer = styled.div`
    width: 100%;
    padding: 30px 0;
    text-align: center;
    font-weight: bold;
`
