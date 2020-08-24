import React from 'react';
import { CanvaFrame, BlueBackground, FlatGrass, GrassBush, DandelionImage, Moon } from './styles'
import SvgGrass from '../../../svg/grass.svg'
import SvgDandelion from '../../../svg/dandelion.svg'
import { useSpring } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans = (x, y) => `translate3d(${x / 16}px,${y / 16}px,0)`
const transGarden = (x, y) => `translate3d(${x / 6 }px,${y /16 }px,0)`


export const Dandelion = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 60, tension: 400, friction: 80 } }))
    return (
        <CanvaFrame onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <BlueBackground style={{ transform: props.xy.interpolate(trans) }}/>
            <FlatGrass style={{ transform: props.xy.interpolate(trans) }} />
            <GrassBush src={SvgGrass} style={{ transform: props.xy.interpolate(transGarden) }}/>
            <DandelionImage src={SvgDandelion} style={{ transform: props.xy.interpolate(transGarden) }} />
            <Moon />
        </CanvaFrame>);
}

