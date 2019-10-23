export default new (class {
    constructor() {
        this.baseURL = 'https://hacker-news.firebaseio.com/v0'
    }

    _getCache = key => {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (e) {
            return null
        }
    }

    _setCache = (key, payload) =>
        localStorage.setItem(key, JSON.stringify(payload))

    newStories = () =>
        fetch(`${this.baseURL}/newstories.json`)
            .then(response => response.json())
            .then(payload => this._setCache('newstories', payload) || payload)
            .catch(
                error => this._getCache('newstories') || Promise.reject(error)
            )

    getItem = itemId =>
        fetch(`${this.baseURL}/item/${itemId}.json`)
            .then(response => response.json())
            .then(
                payload => this._setCache(`story${itemId}`, payload) || payload
            )
            .catch(
                error =>
                    this._getCache(`story${itemId}`) || Promise.reject(error)
            )
})()
