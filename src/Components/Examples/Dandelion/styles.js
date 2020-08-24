import styled from 'styled-components';
import { animated } from 'react-spring';
import { moonlights } from '../../../Animations/moonlights';
import nightBackground from '../../../images/night.jpg'

// Static Stuff

export const CanvaFrame = styled.div`
    width: 100%;
    height: 70vh;
    position: relative;
`;

export const BlueBackground = styled(animated.div)`
    width: 100%;
    height: 100%;
    background: url(${nightBackground});
    object-fit: cover;
    position: absolute;
    z-index: 0;
`

export const FlatGrass = styled(animated.div)`
    width: 100%;
    height: 20px;
    background: #cff38b;
    position: absolute;
    bottom: 0px;
    z-index: 2;
`

export const GrassBush = styled(animated.img)`
    height: 100px;
    width: 100px;
    position: absolute;
    bottom: 0;
    z-index: 1;
    left: calc(50% - 50px);
`

export const DandelionImage = styled(animated.img)`
    width: 20%;
    position: absolute;
    bottom: 0;
    z-index: 0;
    left: calc(50% - 10%);
`

// Funny stuff animated
export const Moon = styled.div`
    width: 200px;
    height: 200px;
    position: absolute;
    z-index: 1;
    top: 50px;
    right: 100px;
    border-radius: 50%;
    background: #e2efff;
    box-shadow:
        0 0 0 8px #e2efff80,
		0 0 0 16px #e2efff40,
		0 0 0 24px #e2efff20,
		0 0 0 32px #e2efff10,
		0 0 0 40px #e2efff00,
		0 0 40px 40px #e2efff10;
	animation: ${moonlights} 3s 3s infinite linear;                   ;
`;