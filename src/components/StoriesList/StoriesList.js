import React from 'react'
import { Link } from 'react-router-dom'

export function StoriesList({ stories }) {
    return stories.map((story, index) => (
        <Link
            key={story.id}
            to={`/stories/${story.id}`}
            className="mb-1 block w-full"
        >
            {index + 1}
            {''} - {story.title}
        </Link>
    ))
}

export default StoriesList
