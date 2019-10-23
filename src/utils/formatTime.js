/**
 *
 * Receives epoch time
 * Returns time formatted as hh:mm AM/PM
 */
export default time => {
    const date = new Date(time * 1000)
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let pm = hours >= 12

    minutes = minutes > 9 ? minutes : `0${minutes}`
    hours = hours > 9 ? hours : `0${hours}`

    return `${hours}:${minutes} ${pm ? 'PM' : 'AM'}`
}
