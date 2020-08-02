import React from 'react'
import { Main } from './styles'

import Tab from '../Tab'
import Aside from '../Aside'
import Content from '../Content'

const MainComponent:React.FC = () => {
    return (
        <Main>
            <Tab />
            <Aside />
            <Content />
        </Main>
    )
}

export default MainComponent