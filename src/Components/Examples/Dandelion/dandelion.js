import React from 'react';
import { CanvaFrame, BlueBackground, FlatGrass, GrassBush,DandelionImage , Moon } from './styles'
import SvgGrass from '../../../svg/grass.svg'
import SvgDandelion from '../../../svg/dandelion.svg'

export const Dandelion = () => {
    return (
        <CanvaFrame>
            <BlueBackground />
            <FlatGrass />
            <GrassBush src={SvgGrass} />
            <DandelionImage src={SvgDandelion}/>
            <Moon />
        </CanvaFrame>);
}

