import styled, { css } from 'styled-components'
import { FaGithub, FaBell } from 'react-icons/fa'

export const Header = styled.header`
    width: 100%;
    padding: 8px 16px;
    background-color: var(--black);
    
    display: flex;
    align-items: center;
`

export const Navigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
`

export const InputContainer = styled.div`
    input::placeholder {
        color: var(--white-text);
    }

    input:-ms-input-placeholder {
        color: var(--white-text);
    }

    input::-ms-input-placeholder { 
        color: var(--white-text);
    }
   
    display: flex;
    align-items: center;

    margin-right: 16px;
    border-radius: 5px;

    color: var(--white-text);
    background-color: var(--grey);
    opacity: 0.7;
    width:  289px;
    transition: width 0.2s linear;

    input {
        color: inherit;
        border: none;
        height: 30px;
        width: 245px;
        padding: 0 12px;
        background-color: transparent;
        transition: width 0.2s linear;
    }

    figure {
        width: 20px;
        height: 20px;
        margin: 0 12px;
        line-height: 20px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid var(--white);
    }
   
    &:focus-within figure {
        display: none;
    }

    &:focus-within input {
        color: var(--black-text);
        width: 100%;
    }

    &:focus-within input::placeholder {
        color: var(--black-text);
    }

    &:focus-within input:-ms-input-placeholder {
        color: var(--black-text);
    }

    &:focus-within input::-ms-input-placeholder { 
        color: var(--black-text);
    } 

    &:focus-within {
        background-color: var(--white);
        opacity: 1;
        width: 500px;
    }

    @media (max-width: 950px) {
        &:focus-within {
            width: 100%;
        }
    }

`

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-shrink: 0;
  
    li {
        color: var(--white-text);
        transition: opacity 0.4s;
        margin-right: 16px;
        font-weight: bold;
        font-size: 14px;

        &:hover {
            opacity: 0.6;
        }

        a {
            color: inherit;
            text-decoration: none;
        }
    }
`

export const ContainerBell = styled.figure`
    position: relative;
    width: 20px;

    &::before {
        content: "";
        width: 10px;
        height: 10px;
        z-index: 1;

        opacity: 1 !important;
        border-radius: 50%;
        background-color: var(--span);
        
        position: absolute;
        top: 0;
        right: 0;
    }
`

export const icon = css`
    cursor: pointer;
    margin-right: 16px;
    color: var(--white);
    border-radius: 50%;

    transition: opacity 0.4s;
    flex-shrink: 0;

    &:hover {
        opacity: 0.6;
    }
`

export const BellIcon = styled(FaBell)`
    ${icon}
    font-size: 20px;
`

export const GitHubIcon = styled(FaGithub)`
    ${icon}
    font-size: 30px;
`