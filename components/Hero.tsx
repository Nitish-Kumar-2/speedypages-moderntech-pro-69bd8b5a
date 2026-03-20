import React from 'react';
import Image from 'next/image';

interface HeroProps {"headline":{"type":"string","required":true}}

const Hero: React.FC<HeroProps> = (props = {"headline":"Welcome"}) => {
  return (
    <section>{props.headline}</section>
  );
};

export default Hero;