import React from 'react';
import Image from 'next/image';

interface FooterProps {"copyright":{"type":"string","required":true}}

const Footer: React.FC<FooterProps> = (props = {"copyright":"© 2024"}) => {
  return (
    <footer>{props.copyright}</footer>
  );
};

export default Footer;