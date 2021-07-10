export const getCurrentDateString = () => new Date().toLocaleDateString();

export const getLastNElementsOfArray = <T>(arr: Array<T>, n: number): Array<T> => {
    return arr.slice(-n);
};

export const getLastElement = <T>(arr: Array<T>): T | undefined => {
    return [...arr].pop();
};
