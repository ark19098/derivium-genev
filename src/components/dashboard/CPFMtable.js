import { Pagination } from 'antd';
import React from 'react';
import { styled } from 'styled-components';

const CPFMtable = () => {

    const handlePageChange = () => {

    }

    return (
        <Wrapper>
            <table>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>
                            <div className='checkbox-head'>
                                <span>Refinitiv</span>
                                <input type='checkbox'/>
                            </div>
                        </th>
                        <th>
                        <div className='checkbox-head'>
                            <span>Bloomberg</span>
                            <input type='checkbox'/>
                        </div>
                        </th>
                        <th>
                            <div className='checkbox-head'>
                                <span>Tradition</span>
                                <input type='checkbox'/>
                            </div>
                        </th>
                        <th>
                            <div className='checkbox-head'>
                                <span>Web</span>
                                <input type='checkbox'/>
                            </div>
                        </th>
                        <th>Frequency</th>
                        <th>Token</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>POS</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Modified MIFOR</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>OIS</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Private CDs</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>PSU CDs</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>CP</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>SDLs</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>AAA Corp Bonds</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>NBFCs</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>HFCs</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    {/* <tr>
                        <td>Corporate</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>T-Bills</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Gsec</td>
                        <td className='checkbox'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td align='center'><input type='checkbox'/></td>
                        <td></td>
                        <td></td>
                    </tr> */}
                </tbody>
            </table>
            <Pagination
                showSizeChanger={false}
                pageSize={10}
                onChange={handlePageChange}
                total={500}
                style={{textAlign: 'center', marginTop: '1rem'}}
            />
        </Wrapper>
    );
}

export default CPFMtable;

const Wrapper = styled.div`
    margin-top: 1rem;
    ${'' /* color: ${({theme}) => theme.colors.accent}; */}
    table {
        width: 95%;
        margin: auto;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
    table, th, td {
        border: 1.5px solid #F0F0F0;
        border-collapse: collapse;
    }
    thead {
        background: ${({theme}) => theme.colors.primary};
        color: #fff;
    }
    td{
        font-size: 1.5rem;
        letter-spacing: 0.05rem;
        color: #000;
        border: 1px solid #F0F0F0;
        border-left: 1.5px solid #F0F0F0;
        padding: 2rem 3rem;
    }
    th {
        padding: 1.5rem 2.5rem;
        font-size: 1.8rem;
        
    }
    .checkbox {
        text-align: center;
        // border: 1px solid ${({theme}) => theme.colors.accent};
    }
    input[type=checkbox] {
        position: relative;
        cursor: pointer;
   }
   input[type=checkbox]:before {
        content: "";
        position: absolute;
        width: 1.4rem;
        height: 1.4rem;
        top: 0;
        left: 0;
        border: 2.5px solid ${({theme}) => theme.colors.primary};
        border-radius: 3px;
        background-color: white;
}
   input[type=checkbox]:checked:after {
        content: "";
        width: 4px;
        height: 9px;
        border: solid ${({theme}) => theme.colors.accent};
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: 2px;
        left: 6px;
    }
    .checkbox-head {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
`;
