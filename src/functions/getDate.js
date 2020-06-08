export function getDate() {
    let date = new Date()
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
    let year = date.getFullYear()

    return `${hour}:${min} ${day}:${month}:${year}`
}