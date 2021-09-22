import React from "react";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const icons = [MailOutlined, AppstoreOutlined, SettingOutlined]

export class BigLogo extends React.Component {
    constructor() {
        super()
        setInterval(() => {
            if (!this.state) {
                this.setState({current: 1})
            }
            else {
                this.setState({current: (this.state.current + 1) % icons.length})
            }
        }, 1500)
    }
    render() {
        let Icon = this.state ?
            icons[this.state.current] :
            AppstoreOutlined;
        
        return <div id="biglogo">
            <img width="500" height="87" alt="Ant Design" src="AntDesign.svg" class="home-banner-normal"/>
            <Icon id="dot"/>
        </div>

    }
}

