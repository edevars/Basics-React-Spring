import React from 'react';
import { CanvaFrame, BlueBackground, FlatGrass, GrassBush, Sun } from './styles'
import SvgGrass from '../../../svg/grass.svg'
import SvgSun from '../../../svg/sun.svg'

export const Dandelion = () => {
    return (
        <CanvaFrame>
            <BlueBackground />
            <FlatGrass />
            <GrassBush src={SvgGrass} />
            <Sun src={SvgSun} />
        </CanvaFrame>);
}

