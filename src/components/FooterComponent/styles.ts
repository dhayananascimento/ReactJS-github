import styled from 'styled-components'

export const Footer = styled.footer`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 16px;

    display: flex;
    justify-content: space-between;

    ul {
        list-style: none;
        display: flex;

        li {

            &:first-child {
                font-size: 18px;
            }

            color: var(--grey-text);
            font-size: 16px;
            margin-right: 16px;

            a {
                color: var(--blue-text);
                text-decoration: none;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

    }

    figure {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--black);
    }

    @media (max-width: 1011px) {
        flex-direction: column;
        align-items: center;

        figure {
            display: none;
        }
    }
`
