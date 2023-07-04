import React from 'react';
import { styled } from 'styled-components';

const CPFMtable = () => {
    return (
        <Wrapper>
            <table>
                <thead>
                    <tr>
                        <th>Products</th>
                        <th>Refinitiv <input type='checkbox'/></th>
                        <th>Bloomberg <input type='checkbox'/></th>
                        <th>Tradition <input type='checkbox'/></th>
                        <th>Web <input type='checkbox'/></th>
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
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </Wrapper>
    );
}

export default CPFMtable;

const Wrapper = styled.div`
    margin-left: 1rem;
    // margin-top: 1rem;
    color: ${({theme}) => theme.colors.accent};
    table, th, td {
        border: 1.5px solid ${({theme}) => theme.colors.accent};
        border-collapse: collapse;
    }
    td{
        border: none;
        border-left: 1.5px solid ${({theme}) => theme.colors.accent};
    }
    th {
        padding: 1.5rem 2.5rem;
        font-size: 1.8rem;
        
    }
    td {
        padding: 1rem;
        font-size: 1.3rem;
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
        width: 12px;
        height: 12px;
        top: 0;
        left: 0;
        border: 1.5px solid ${({theme}) => theme.colors.accent};
        border-radius: 0px;
        background-color: white;
}
   input[type=checkbox]:checked:after {
        content: "";
        width: 2px;
        height: 8px;
        border: solid ${({theme}) => theme.colors.accent};
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        position: absolute;
        top: 2px;
        left: 6px;
}
    
`;
