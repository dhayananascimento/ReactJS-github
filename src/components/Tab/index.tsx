import React from 'react'
import { TabWrapper } from './styles'
import { FiBookOpen, FiBook, FiFolder } from 'react-icons/fi'

const Tab:React.FC = () => {
    return (
        <TabWrapper>
            <ul>
                <li><a href="/"><FiBookOpen /> Overview</a></li>
                <li><a href="/" className="active"><FiBook /> Repositories <span>22</span></a></li>
                <li><a href="/"><FiFolder /> Projects</a></li>
            </ul>
        </TabWrapper>
    )
}

export default Tab