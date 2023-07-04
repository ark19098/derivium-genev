import React from 'react';
import { styled } from 'styled-components';
import SideNav from './SideNav';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <Wrapper>
            <SideNav />
            <main>
                <Outlet />
            </main>
        </Wrapper>
    );
}

export default Dashboard;

const Wrapper = styled.section`
    display: flex;
    height: calc(100vh - 5rem);
    main {
        flex: 4;
        background-color: inherit;
    }
`;