import React from 'react'
import { TabsWrapper, Tabs, List } from './styles'
import { FiBookOpen, FiBook, FiFolder } from 'react-icons/fi'

const Tab:React.FC = () => {
    return (
        <TabsWrapper>
            <Tabs>            
                <List>
                    <li><a href="/"><FiBookOpen /> Overview</a></li>
                    <li><a href="/" className="active"><FiBook /> Repositories <span>22</span></a></li>
                    <li><a href="/"><FiFolder /> Projects</a></li>
                </List>
            </Tabs>
        </TabsWrapper>
    )
}

export default Tab