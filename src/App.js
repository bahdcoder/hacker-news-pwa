import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// css
import 'main.css'

// components
import Stories from 'components/Stories'
import StoryDetails from 'components/StoryDetails'

function App() {
    return (
        <div className="container mx-auto py-5">
            <div className="w-full px-2 border-box lg:w-2/3 mx-auto">
                <BrowserRouter>
                    <h2 className="mb-3"># Hacker News Story List</h2>
                    <Route exact component={Stories} path={'/'} />
                    <Route component={StoryDetails} path={'/stories/:story'} />
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
