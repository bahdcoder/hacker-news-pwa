import React from 'react'
import { act } from 'react-dom/test-utils'
import { BrowserRouter } from 'react-router-dom'
import { render, unmountComponentAtNode } from 'react-dom'

import { Stories } from './Stories'

jest.useFakeTimers()

describe('The <Stories /> component', () => {
    const props = {
        api: {
            newStories: jest.fn(
                () => new Promise((res, rej) => res([1, 2, 3, 4, 5]))
            ),
            getItem: jest.fn(
                storyId =>
                    new Promise((res, rej) =>
                        res({
                            id: storyId
                        })
                    )
            )
        }
    }

    it('fetches new stories when user visits stories page', async () => {
        const container = document.createElement('div')

        await act(async () => {
            render(
                <BrowserRouter>
                    <Stories {...props} />
                </BrowserRouter>,
                container
            )
        })

        expect(props.api.newStories).toHaveBeenCalled()
        expect(props.api.getItem).toHaveBeenCalledTimes(5)
    })
})
