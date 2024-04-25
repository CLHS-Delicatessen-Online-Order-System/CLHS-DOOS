import React from "react";
import { Menu, Image, Button } from "semantic-ui-react";
import logoImage from "./picture/clhs_logo.png";

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

export default Header;