import { Tabs } from 'antd';
import React from 'react';
import { styled } from 'styled-components';
import DetailTable from './DetailTable';



const TablesTab = () => {
    const items = [
        {
            key: '1',
            label: 'POS',
            children: <DetailTable />
        },
        {
            key: '2',
            label: 'Modified MIFOR',
            children: <DetailTable />
        },
        {
            key: '3',
            label: 'OIS',
            children: <DetailTable />
        },
        {
            key: '4',
            label: 'Private CDs',
            children: <DetailTable />
        },
        {
            key: '5',
            label: 'PSU CDs',
            children: <DetailTable />
        },
        {
            key: '6',
            label: 'CP',
            children: <DetailTable />
        },
        {
            key: '7',
            label: 'SDLs',
            children: <DetailTable />
        },
        {
            key: '8',
            label: 'AAA Corp Bonds',
            children: <DetailTable />
        },
        {
            key: '9',
            label: 'AAA Corp Bonds',
            children: <DetailTable />
        }
    ];
    return (
        <Wrapper>
            <Tabs defaultActiveKey='1' items={items} />
        </Wrapper>
    );
}

export default TablesTab;

const Wrapper = styled.div`
    width: 95%;
    margin: auto;
    margin-top: 1rem;
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: ${({theme}) => theme.colors.primary} !important;
    }
    .ant-tabs-ink-bar {
        ${'' /* color: ${({theme}) => theme.colors.primary}; */}
        background-color: ${({theme}) => theme.colors.primary};
    }
`;
