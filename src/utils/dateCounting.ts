const dateCounting = (endDate:Date):number => {
    const now = new Date();
    const currDay = 24 * 60 * 60 * 1000;
    const diff = +endDate - +now;

    return Math.floor(diff/currDay);
}

export { dateCounting };