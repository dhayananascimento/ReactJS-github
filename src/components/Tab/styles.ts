import styled from 'styled-components'


export const TabWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--border);

    ul {
        height: 48px;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;

        list-style: none;
        display: flex;

        padding-left: 25%;

        li {
            a {
                display: block;
                height: 100%;

                display: flex;
                align-items: center;

                font-size: 14px;
                text-decoration: none;
                padding: 8px 16px;
                color: var(--black-text);
                border-bottom: 3px solid transparent;
                transition: border .4s;

                span {
                    margin-left: 8px;
                    border-radius: 40%;
                    background-color: var(--hover);
                    padding: 5px;
                }

                &:hover {
                    border-bottom: 3px solid var(--hover);
                }

                &.active {
                    border-bottom: 3px solid var(--underline);
                    font-weight: bold;
                }
            }
        }
    }

    @media (max-width: 767px) {
        ul {
            /* width: 100%; */
            overflow-x: auto;
            padding: 0 16px;
        }
    }

    
`
