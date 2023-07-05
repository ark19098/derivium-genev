import { styled } from "styled-components";

export const PublishButton = styled.div`
    background-color: ${props => props.bg};
    color: white;
    text-align: center;
    padding: 4px 2px;
    border-radius: 5px;
    margin: auto;
    cursor: pointer;
    &:hover {
        transform: translateY(-2px);
        box-shadow: 5px 5px 5px #ccc;
    }
    &:active {
        transform: translateY(0);
        box-shadow: 3px 3px 3px #ccc;
    }
`;