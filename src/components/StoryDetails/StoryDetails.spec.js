import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { StoryDetails } from './StoryDetails'
import { BrowserRouter } from 'react-router-dom'

describe('The <StoryDetails /> component', () => {
    const TEST_AUTHOR = 'TEST_AUTHOR'
    const TEST_STORY_ID = 'TEST_STORY_ID'
    const TEST_STORY_TITLE = 'TEST_STORY_TITLE'

    const story = {
        by: TEST_AUTHOR,
        time: 1571791636,
        id: TEST_STORY_ID,
        title: TEST_STORY_TITLE
    }

    const defaultProps = {
        match: {
            params: {
                story: TEST_STORY_ID
            }
        },
        history: {
            push: jest.fn()
        },
        api: {
            getItem: jest.fn(() => new Promise((res, rej) => res(story)))
        }
    }

    it('fetches an item from api and renders its details when user visits story details page', async () => {
        const container = document.createElement('div')
        const props = {
            ...defaultProps,
            api: {
                getItem: jest.fn(() => new Promise((res, rej) => rej()))
            }
        }

        // container
        await act(async () => {
            render(
                <BrowserRouter>
                    <StoryDetails {...props} />
                </BrowserRouter>,
                container
            )
        })

        expect(props.api.getItem).toHaveBeenCalledWith(TEST_STORY_ID)
    })

    it('redirects the user to the / page if the story was not found', async () => {
        const container = document.createElement('div')
        const props = {
            ...defaultProps
        }

        // container
        await act(async () => {
            render(
                <BrowserRouter>
                    <StoryDetails {...props} />
                </BrowserRouter>,
                container
            )
        })

        expect(props.api.getItem).toHaveBeenCalledWith(TEST_STORY_ID)
        expect(props.history.push).toHaveBeenCalledWith('/')
    })
})
