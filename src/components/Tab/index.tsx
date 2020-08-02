import React from 'react'
import { TabWrapper } from './styles'

const Tab:React.FC = () => {
    return (
        <TabWrapper>
            <ul>
                <li><i></i> <a href="/">Overview</a></li>
                <li><i></i> <a href="/" className="active">Repositories <span>22</span></a></li>
                <li><i></i> <a href="/">Projects</a></li>
                <li><i></i> <a href="/">Packages</a></li>
            </ul>
        </TabWrapper>
    )
}

export default Tab