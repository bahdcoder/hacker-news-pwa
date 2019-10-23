import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

it('renders without crashing', () => {
    const container = document.createElement('div')
    ReactDOM.render(<App />, container)

    expect(container.innerHTML).toMatchInlineSnapshot(
        `"<div class=\\"container mx-auto py-5\\"><div class=\\"w-full px-2 border-box lg:w-2/3 mx-auto\\"><h2 class=\\"mb-3\\"># Hacker News Story List</h2></div></div>"`
    )
    ReactDOM.unmountComponentAtNode(container)
})
