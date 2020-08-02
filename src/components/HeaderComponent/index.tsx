import React from 'react'
import { Header } from './styles'
import { FaGithub, FaBell } from 'react-icons/fa'

const HeaderComponent:React.FC = () => {
    return (
        <Header>
            <figure title="Ícone github">
                <FaGithub />
            </figure>

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

            <figure title="Notificacões">
                <FaBell />
            </figure>

        </Header>
    )
}

export default HeaderComponent