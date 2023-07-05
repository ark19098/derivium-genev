import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import NavBar from './NavBar';

const Header = () => {
    return (
        <MainHeader>
            <NavLink><img src='images/logo.png' alt='logo image' className='logo-img' /></NavLink>
            <NavBar />
        </MainHeader>
        
    );
}

export default Header;

const MainHeader = styled.header`
    height: 10rem;
    padding: 0 4.8rem;
    font-size: 2rem;
    ${'' /* background: #fff; */}
    background: ${({theme}) => theme.colors.bg};
    border-bottom: 1px solid #def2ff;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo-img {
        height: 5rem;
    }
    ${'' /* box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); */}
`;
