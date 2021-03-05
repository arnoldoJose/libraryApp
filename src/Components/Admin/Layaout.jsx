import React from 'react'

import '../../Css/layaoutstyle.css';
import HeaderAdmin from './HeaderAdmin';
import { Layout, Menu } from 'antd';
import {
  
  UserOutlined,
  HomeFilled,
  PoweroffOutlined

} from '@ant-design/icons';


import {Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu


const Layaout = ({children}) => {

  // const {pathname} = location;

  return (
    
      <Layout style={{ height: "100vh" }}>
        <Sider 
        collapsedWidth="0"
        breakpoint="md"
        >
           
          <div className="logo" />
          <Menu theme="dark" mode="inline" style={{ position:'relative', top:'3em' }} >
          <Menu.Item key="1" icon={<HomeFilled />}>
            <Link to="/admin/count">
              Inicio
            </Link>
          </Menu.Item>
          <SubMenu key="sub2" icon={<UserOutlined />} title="Administrar">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>

          <Menu.Item icon={<PoweroffOutlined/>}>
            Cerrar Sesion
          </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
          <HeaderAdmin/>
          </Header>
          <Content
            className="site-layout-background main-admin"
            style={{
              margin: '64px 16px',
              padding: 24,
              maxHeight: '100vh',
            }}
          >
           {children}
          </Content>
        </Layout>
      </Layout>
    
  )
}

export default Layaout
/**
 *  
 */