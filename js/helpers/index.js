export const getFormatDate = () => {
    let date = new Date();
    const month = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    
    return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
}