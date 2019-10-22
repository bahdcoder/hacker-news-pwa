import React from 'react'

export function StoriesList({ stories }) {
    return stories.map((story, index) => (
        <div key={story.id} className="mb-1">
            {index + 1}
            {''} - {story.title}
        </div>
    ))
}

export default StoriesList
