// export const capitalizeString = str => str.toUpperCase();

const capitalizeString = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};


export {capitalizeString};
export const hello = 'hello';
export const world = 'world';