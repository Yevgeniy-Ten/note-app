export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const validString = (string) => {
    return string ? string.trim().length > 0 : false
}
export const compareValues = (val1, val2) => val1 === val2;
export const handlerDataFromDB = (data) => {
    return Object.keys(data).map((id, i) => {
        return {
            ...data[id],
            id,
        }
    }).reverse()
}