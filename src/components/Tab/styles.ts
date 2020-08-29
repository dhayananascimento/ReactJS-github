import styled from 'styled-components'


export const TabsWrapper = styled.div`
    width: 100%;
    border-bottom: 1px solid var(--border);   
`

export const Tabs = styled.div`
    width: 100%;
    height: 48px;
    max-width: 1280px;
    margin: 0 auto;  

    @media (max-width: 767px) {   
        overflow-x: auto;
    }
`

export const List = styled.ul`
    width: 75%;
    list-style: none;
    display: flex;
    margin-left: 25%;

    li {
        a {
            height: 48px;

            display: flex;
            align-items: center;

            font-size: 14px;
            text-decoration: none;
            padding: 8px 16px;
            color: var(--black-text);
            border-bottom: 3px solid transparent;
            transition: border .4s;

            svg {
                font-size: 15px;
                margin-right: 8px;
                color: var(--icon);
            }

            span {
                margin-left: 8px;
                border-radius: 40%;
                background-color: var(--hover);
                padding: 8px;
            }

            &:hover {
                border-bottom: 3px solid var(--hover);
            }

            &.active {
                border-bottom: 3px solid var(--underline);
                font-weight: bold;

                svg {
                    color: var(--black);
                }
            }
        }
    }

    @media (max-width: 767px) {   
        padding: 0 16px;
        width: 100%;
        margin-left: 0;
    } 
`
