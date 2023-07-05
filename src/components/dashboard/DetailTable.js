import { Progress, Select, Table } from 'antd';
import React from 'react';
import { styled } from 'styled-components';
import { PublishButton } from '../ui/PublishButton';

const columns = [
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Bid',
    dataIndex: 'bid',
    key: 'bid',
  },
  {
    title: 'Ask',
    dataIndex: 'ask',
    key: 'ask',
  },
  {
    title: 'Timestamps',
    dataIndex: 'timestamps',
    key: 'timestamps',
  },
  {
    title: 'Publish',
    dataIndex: 'publish',
    key: 'publish',
    render: () => <PublishButton bg='#ff6b6b'>Publish</PublishButton>
  },
  {
    title: 'View Log',
    dataIndex: 'viewLog',
    key: 'viewLog',
    render: () => <PublishButton bg='#10ac84'>View Log</PublishButton>
  },
  {
    title: 'Reject %',
    dataIndex: 'rejectPercent',
    key: 'rejectPercent',
    render: (_, {rejectPercent}) => <Progress percent={30} size="small" strokeColor='#ffa801' />
  },
];

const options=[
    { value: 'POS', label: 'POS' },
    { value: 'Modified MIFOR', label: 'Modified MIFOR' },
    { value: 'OIS', label: 'OIS' },
    { value: 'Private CDs', label: 'Private CDs' },
    { value: 'PSU CDs', label: 'PSU CDs' },
    { value: 'CP', label: 'CP' },
    { value: 'SDLs', label: 'SDLs' },
    { value: 'AAA Corp Bonds', label: 'AAA Corp Bonds (Additional Sectors)' },
    { value: 'AAA Corp Bonds', label: 'AAA Corp Bonds (NABARD)' },
];

const DetailTable = () => {

    const handleChange = () => {}

    return (
        <Wrapper>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px',}}>
                <p>Select Category:</p>
                <Select
                    defaultValue="POS"
                    style={{ width: '40%' }}
                    onChange={handleChange}
                    options={options}
                />
            </div>
            <div className='card'>
                <Table 
                dataSource={dataSource}
                bordered
                size='medium'
                columns={columns} 
                style={{
                    marginTop: '20px',
                    padding: 0,
                }}
                />
            </div>
        </Wrapper>
    );
}

export default DetailTable;

const Wrapper = styled.div`
    width: 95%;
    margin: auto;
    p {
        color: ${({theme}) => theme.colors.primary};
    }
    .ant-table-tbody {
        border: none;
    }
    .ant-table-thead .ant-table-cell {
        background-color:  ${({theme}) => theme.colors.primary};
        color: white;
        border-radius: 0 !important;
    }
    .card {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
`;

const dataSource = [
  {
    key: '1',
    year: '2Y',
    bid: 5.3216,
    ask: 6.2365,
    timestamps:'03:30',
    publish:'Publish',
    viewLog: 'View Log',
    rejectPercent: '30%',
  },
  {
    key: '2',
    year: '3Y',
    bid: 5.3216,
    ask: 6.2365,
    timestamps:'03:30',
    publish:'Publish',
    viewLog: 'View Log',
    rejectPercent: '30%',
  },
  {
    key: '1',
    year: '5Y',
    bid: 5.3216,
    ask: 6.2365,
    timestamps:'03:30',
    publish:'Publish',
    viewLog: 'View Log',
    rejectPercent: '30%',
  },
  {
    key: '1',
    year: '7Y',
    bid: 5.3216,
    ask: 6.2365,
    timestamps:'03:30',
    publish:'Publish',
    viewLog: 'View Log',
    rejectPercent: '30%',
  },
  {
    key: '1',
    year: '10Y',
    bid: 5.3216,
    ask: 6.2365,
    timestamps:'03:30',
    publish:'Publish',
    viewLog: 'View Log',
    rejectPercent: '30%',
  },
];
