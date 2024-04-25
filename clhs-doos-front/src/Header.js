import React from "react";
import { Menu, Image, Button, Sidebar, Segment } from "semantic-ui-react";
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


        <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                vertical
                visible
                width="thin"
            >
                <Menu.Item as="a">首頁</Menu.Item>
                <Menu.Item as="a">產品</Menu.Item>
                <Menu.Item as="a">關於我們</Menu.Item>
                <Menu.Item as="a">聯繫我們</Menu.Item>
        </Sidebar>
    </Menu>;
}

export default Header;