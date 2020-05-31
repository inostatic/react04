export function transformObjectToArray(data) {
    if(data !== null) {
        let i = 0
        for (let key in data) {
            data[key].key = key
            data[key].id = i
            i++
        }
        return Object.values(data)
    }
    return []
}

/*
    на входе объект объектов
    пушим ключи объектов внутрь объектов
    возвращаем массив объектов
 */

