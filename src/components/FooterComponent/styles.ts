import styled from 'styled-components'

export const Footer = styled.footer`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 16px;

    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--border);

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        &:first-child li:first-child {
            font-size: 18px;
        }

        li {
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
        font-size: 20px;
        color: var(--grey);
        opacity: 0.7;
    }

    @media (max-width: 1011px) {
        flex-direction: column;
        align-items: center;

        figure {
            display: none;
        }
    }
`
