export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const validString = (string) => {
    return string ? string.trim().length > 0 : false
}
export const handlerDataFromDB = (data) => {
    return Object.keys(data).map((id, i) => {
        return {
            ...data[id],
            id,
        }
    }).reverse()
}
export const randomError = () => {
    const chance = getRandomInt(0, 100)
    if (chance >= 95) {
        throw new Error("Hey, Im Virus in Your project")
    }
}