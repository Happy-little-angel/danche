import React, { Component } from 'react'
import MenuConfig from './../../config/menuConfig'
import {NavLink} from 'react-router-dom'
import './index.less'
import { Menu } from 'antd';

const { SubMenu } = Menu;

function handleClick(e) {
  console.log('click', e);
}
export default class NavLeft extends Component {
    
   componentWillMount() {
        //didmount的时候调用；
        const menuTreeNode = this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
    }
        
    //实现菜单渲染：
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>              
                 </Menu.Item>
        })
    }
    render() {

        return (
           <div>
               <div className="logo">
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt=""/>
                    <h1>Imooc MS</h1>
               </div>
               <Menu onClick={handleClick} theme="dark" mode="vertical">
                 { this.state.menuTreeNode }   
            </Menu>
           </div>
        )
    }
}
