import withApi from 'utils/withApi'
import { debounce } from 'throttle-debounce'
import React, { useEffect, useState, useReducer } from 'react'

// components
import StoriesList from 'components/StoriesList'

const SET_STORY = 'SET_STORY'
const SET_STORIES = 'SET_STORIES'
const SET_STORIES_FETCHED_INDEX = 'SET_STORIES_FETCHED_INDEX'

const storiesReducer = (state, action) => {
    if (action.type === SET_STORIES_FETCHED_INDEX)
        return {
            ...state,
            fetchedIndex: action.payload
        }

    if (action.type === SET_STORY)
        return {
            ...state,
            fetchedStories: [...state.fetchedStories, action.payload]
        }

    if (action.type === SET_STORIES)
        return {
            ...state,
            stories: action.payload
        }

    return state
}

export function Stories({ api }) {
    const pageSize = 20
    const [, setError] = useState('')
    const [
        { stories, fetchedIndex, fetchedStories },
        dispatchStories
    ] = useReducer(storiesReducer, {
        fetchedIndex: 0,
        stories: [],
        fetchedStories: []
    })

    const fetchStoriesDebounced = debounce(500, payload => {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        )
            fetchStories(payload)
    })

    const fetchStories = ({ stories, fetchedIndex }) => {
        if (!stories || stories.length === 0) return

        dispatchStories({
            type: SET_STORIES_FETCHED_INDEX,
            payload: fetchedIndex + pageSize
        })

        stories
            .slice(fetchedIndex, pageSize + fetchedIndex)
            .forEach(storyId => {
                api.getItem(storyId).then(
                    payload =>
                        payload &&
                        dispatchStories({
                            type: SET_STORY,
                            storyId,
                            payload
                        })
                )
            })
    }

    useEffect(() => {
        api.newStories()
            .then(payload =>
                dispatchStories({
                    type: SET_STORIES,
                    payload
                })
            )
            .catch(errorResponse => setError(errorResponse))
    }, [api])

    useEffect(() => {
        const handleScroll = () =>
            fetchStoriesDebounced({ stories, fetchedIndex })

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)

        // eslint-disable-next-line
    }, [stories, fetchedIndex])

    useEffect(() => {
        fetchStories({ stories, fetchedIndex })
        // eslint-disable-next-line
    }, [stories, api])

    return <StoriesList stories={fetchedStories} />
}

export default withApi(Stories)
