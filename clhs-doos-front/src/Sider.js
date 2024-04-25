import React from "react";
import { Menu, Sidebar, Segment } from "semantic-ui-react";
import Header from './Header'; //上面

function Slider(){

    return (
        <Sidebar.Pushable as={Segment}>
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

            <Sidebar.Pusher>
                <Segment basic>
                    <Header />
                    <p>主要內容</p>
                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
    /*
    return <Menu vertical>
        <Menu.Item>側邊1</Menu.Item>
        <Menu.Item>側邊2</Menu.Item>

    </Menu>
    */

}

export default Slider;