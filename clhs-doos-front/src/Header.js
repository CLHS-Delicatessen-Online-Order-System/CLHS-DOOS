import React from "react";
import { Menu, Image, Button, Sidebar, Segment } from "semantic-ui-react";
import logoImage from "./picture/clhs_logo.png";

const Header = () => {
    return <div className="header_div">
        
        <img src={logoImage} alt="logoImage"/>

        中大壢中熱食部線上訂餐系統

        <button>登入</button>

    </div>;
    

};
  

export default Header;


/*
<div className="header_div"></div>;

function Header() {
    return <Menu>
        <Menu.Item>
                <Image src={logoImage} size="mini" />
        </Menu.Item>
        
        <Menu.Item>中大壢中熱食部線上訂餐系統</Menu.Item>

        <Menu.Menu position="right">
            <Button>登入</Button>
        </Menu.Menu>
    </Menu>;
}
*/