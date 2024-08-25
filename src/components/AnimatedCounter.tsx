"use client"

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount:number}) => {
  return (
    <CountUp
        duration={2}
        prefix='$'
        end={amount}
    />
  )
}

export default AnimatedCounter