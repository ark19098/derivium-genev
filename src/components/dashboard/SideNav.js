import { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

const SideNav = () => {
    return (
        <Wrapper>
            <Menu 
                mode="inline"
                inlineIndent={0}
                style={{
                    background: '#1C79BB',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '15px',
                }}
            >
                {/* <SubMenu key='0' title="Client Product Frequency Mapping">
                    <Menu.Item key='1'>
                        <NavLink to=''>Client Product Frequency Mapping</NavLink>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key='2' title="Menu 2">
                    <Menu.Item key='3'>
                        <NavLink to='detail'>Detail Page</NavLink>
                    </Menu.Item>
                </SubMenu> */}
                <Menu.Item key='0'>
                <NavLink to='' className='link'>Client Product Frequency Mapping</NavLink>
                </Menu.Item>
                <Menu.Item key='1'>
                <NavLink to='detail' className='link'>Detail Page</NavLink>
                </Menu.Item>
            </Menu>
        </Wrapper>
    );
}

export default SideNav;

const Wrapper = styled.div`
    flex: 1;
    background: ${({theme}) => theme.colors.primary};
    .link {
        text-decoration: none;
    }
    .ant-menu-submenu-title {
    }
    .ant-menu-submenu-title:hover {
        color: #fff!important;
        border-radius: 0;
    }
    .ant-menu-submenu-arrow::before, .ant-menu-submenu-arrow::after {
        background: ${({theme}) => theme.colors.primary};
        color: #fff!important;
    }
    .ant-menu-item::before, .ant-menu-item::after {
        background: ${({theme}) => theme.colors.primary};
        color: #fff!important;
    }
    .ant-menu-item:hover {
        color: #fff!important;
        border-radius: 0;  
    }
    
    .ant-menu-item-selected {
        background-color: #1C79BB !important;
        ${'' /* color: #fff!important; */}
        color: #9ccff5!important;
    }
`;
