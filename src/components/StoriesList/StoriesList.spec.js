import React from 'react'
import { render } from 'react-dom'
import StoriesList from './StoriesList'
import { BrowserRouter } from 'react-router-dom'

describe('The <StoriesList /> component', () => {
    it('Renders a list of all stories', () => {
        const container = document.createElement('div')

        render(
            <BrowserRouter>
                <StoriesList
                    stories={[
                        {
                            by: 'test_author_1',
                            time: 3939,
                            id: 'test_id_1',
                            title: 'test_title'
                        },
                        {
                            by: 'test_author_2',
                            time: 3939,
                            id: 'test_id_2',
                            title: 'test_title_1'
                        }
                    ]}
                />
            </BrowserRouter>,
            container
        )

        expect(container.innerHTML).toMatchInlineSnapshot(
            `"<a class=\\"mb-1 block w-full\\" href=\\"/stories/test_id_1\\">1 - test_title</a><a class=\\"mb-1 block w-full\\" href=\\"/stories/test_id_2\\">2 - test_title_1</a>"`
        )
    })
})
