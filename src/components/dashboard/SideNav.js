import { Menu } from 'antd';
import SubMenu from 'antd/es/menu/SubMenu';
import React from 'react';
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
                <SubMenu key='0' title="Client Product Frequency Mapping">
                    <Menu.Item key='1'>

                    </Menu.Item>
                </SubMenu>
                <SubMenu key='2' title="Menu 2">
                    <Menu.Item key='3'>

                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Wrapper>
    );
}

export default SideNav;

const Wrapper = styled.div`
    flex: 1;
    background: ${({theme}) => theme.colors.primary};
    .ant-menu-submenu-title {
    }
    .ant-menu-submenu-title:hover {
        color: #fff!important;
        border-radius: 0;
        .ant-menu-submenu-arrow::before, .ant-menu-submenu-arrow::after {
            color: #fff!important;
        }
    }
`;
