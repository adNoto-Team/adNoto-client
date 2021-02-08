import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Drawer, Button } from 'antd';
import style from "./style.module.css"

class Navbar extends Component {
	state = {
		current: 'mail',
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<nav className={style.menuBar}>
				<div className={style.logo}>
					<a href=""> adNoto</a>
				</div>
				<div className={style.menuCon}>
					<div className={style.leftMenu}>
						<LeftMenu />
					</div>
					<div className={style.rightMenu}>
						<RightMenu />
					</div>
					<Button className={style.barsMenu} type="primary" onClick={this.showDrawer}>
						<span className={style.barsBtn}></span>
					</Button>
					<Drawer
						title="Basic Drawer"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
						<LeftMenu />
						<RightMenu />
					</Drawer>

				</div>
			</nav>
		);
	}
}

export default Navbar;
