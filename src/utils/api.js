export default new (class {
    constructor() {
        this.baseURL = 'https://hacker-news.firebaseio.com/v0'
    }

    newStories = () =>
        fetch(`${this.baseURL}/newstories.json`)
            .then(response => response.json())
            .catch(error => Promise.reject(error))

    getItem = itemId =>
        fetch(`${this.baseURL}/item/${itemId}.json`)
            .then(response => response.json())
            .catch(error => Promise.reject(error))
})()
