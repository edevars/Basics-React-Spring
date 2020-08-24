import styled from 'styled-components';

// Static Stuff

export const CanvaFrame = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;
`;

export const BlueBackground = styled.div`
    width: 100%;
    height: 100%;
    background: #a7effb;
    position: absolute;
    z-index: 0;
`

export const FlatGrass = styled.div`
    width: 100%;
    height: 25px;
    background: #cff38b;
    position: absolute;
    bottom: 0px;
    z-index: 1;
`

export const GrassBush = styled.img`
    height: 100px;
    width: 100px;
    position: absolute;
    bottom: 0;
    z-index: 0;
    left: calc(50% - 50px);
`

// Funny stuff animated
export const Sun = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    z-index: 1;
    top: 20px;
    right: 20px;
`