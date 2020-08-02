import styled from 'styled-components'

export const Header = styled.header`

    input::placeholder {
        color: var(--white-text);
    }

    input:-ms-input-placeholder {
        color: var(--white-text);
    }

    input::-ms-input-placeholder { 
        color: var(--white-text);
    }

    width: 100%;
    padding: 8px 16px;
    background-color: var(--black);
    
    display: flex;
    align-items: center;

    > div {
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: relative;
        border-radius: 50%;
        background-color: var(--white);
        flex-shrink: 0;

        &::before {
            content: "";
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: var(--span);
            
            position: absolute;
            top: -2px;
            right: -5px;
        }
    }

    > figure {
        width: 32px;
        height: 32px;
        cursor: pointer;
        margin-right: 16px;
        border-radius: 50%;
        background-color: var(--white);

        transition: opacity 0.4s;
        flex-shrink: 0;

        &:hover {
            opacity: 0.6;
        }
    }

    nav {
        width: 100%;
        display: flex;
        align-items: center;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-right: 16px;
            border-radius: 5px;
            color: var(--white-text);
            background-color: var(--grey);
            opacity: 0.7;

            input {
                color: inherit;
                border: none;
                height: 30px;
                width: 200px;
                padding: 0 12px;
                background-color: transparent;
                transition: width 0.4s;
            }

            input:focus {
                width: 350px;
            }

            figure {
                /* flex: 1; */
                width: 20px;
                height: 20px;
                margin: 0 12px;
                text-align: center;
                border-radius: 5px;
                border: 1px solid var(--white);
            }
        }

        ul {
            list-style: none;
            display: flex;

            li {
                color: var(--white-text);
                transition: opacity 0.4s;
                margin-right: 16px;
                font-weight: bold;
                font-size: 16px;

                &:hover {
                    opacity: 0.6;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }
            }
        }
    }

`