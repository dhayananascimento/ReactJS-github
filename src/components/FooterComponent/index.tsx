import React from 'react'
import { Footer } from './styles'

const FooterComponent:React.FC = () => {
    return (
        <Footer>
            <ul>
                <li>© 2020 GitHub, Inc.</li>
                <li><a href="/">Terms</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Security</a></li>
                <li><a href="/">Status</a></li>
                <li><a href="/">Help</a></li>
            </ul>

            <figure title="icone github"></figure>

            <ul>
                <li><a href="/">Contact GitHub</a></li>
                <li><a href="/">Pricing</a></li>
                <li><a href="/">API</a></li>
                <li><a href="/">Training</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">About</a></li>
            </ul>
        </Footer>
    )
}

export default  FooterComponent 