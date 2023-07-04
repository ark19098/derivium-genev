import { FaUserCircle } from 'react-icons/fa';
import { styled } from 'styled-components';
const NavBar = () => {
    return (
        <Wrapper>
            <FaUserCircle size='4rem' className='nav-icon' />
        </Wrapper>
    );
}

export default NavBar;

const Wrapper = styled.section`
    .nav-icon {
        color: ${({theme}) => theme.colors.primary}
    }
`;
