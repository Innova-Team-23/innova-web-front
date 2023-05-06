import React from 'react'
import '../../Assets/style/Home.css';
import { type } from 'os';

type Props = {};

const Header = (props: Props) =>{
    const flexBetween = "flex items-center justify-between";

  return <header>
    <div>
        <img src="logo" alt="{logo}" />
    </div>
  </header>
  
};

export default Header;
