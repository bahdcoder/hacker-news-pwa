import React from 'react'

// css
import 'main.css'

// components
import Stories from 'components/Stories'

function App() {
    return (
        <div className="container mx-auto py-5">
            <div className="w-full px-2 border-box lg:w-2/3 mx-auto">
                <h2 className="mb-3"># Hacker News Story List:</h2>

                <Stories />
            </div>
        </div>
    )
}

export default App
