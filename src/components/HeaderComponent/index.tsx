import React from 'react'
import { Header } from './styles'

const HeaderComponent:React.FC = () => {
    return (
        <Header>
            <figure title="ícone github"></figure>

            <nav>
                <div>
                    <input placeholder="Search or jump to..." type="text"/>
                    <figure>/</figure>
                </div>
                <ul>
                    <li><a href="/">Pull requests</a></li>
                    <li><a href="/">Issues</a></li>
                    <li><a href="/">Marketplace</a></li>
                    <li><a href="/">Explore</a></li>
                </ul>
            </nav>

            <div title="notificacões"></div>

        </Header>
    )
}

export default HeaderComponent