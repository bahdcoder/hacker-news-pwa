import React from 'react'

import api from './api'

/**
 *
 * An HOC that wraps component and adds
 * fetch prop to it
 *
 * @return React.Component
 */
export default Component => props => <Component {...props} api={api} />
