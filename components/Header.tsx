import React from 'react';
import Image from 'next/image';

interface HeaderProps {"logo":{"type":"string","required":true}}

const Header: React.FC<HeaderProps> = (props = {"logo":"Logo"}) => {
  return (
    <header>{props.logo}</header>
  );
};

export default Header;