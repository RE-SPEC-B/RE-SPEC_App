const dateToString= (endDate:Date):string => {
    const y = endDate.getFullYear();
    const m = endDate.getMonth();
    const d = endDate.getDate();

    return `${y}년 ${m+1}월 ${d}일`;
}

export { dateToString };