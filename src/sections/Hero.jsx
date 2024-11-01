import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

const Hero = () => {
    return (
        <section className='min-h-screen flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>Hi, I am Kevin <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
            </div>
            <div className='w-full h-full absolute insert-0'>
                <Canvas className='w-full h-full'>
                    <PerspectiveCamera makeDefault position={[0,0,30]} />
                </Canvas>
            </div>
        </section>
    )
}

export default Hero