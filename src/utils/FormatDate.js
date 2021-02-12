const FormatDate = (date) => {
    const d = new Date(date);
    let month = `${d.getMonth()}`
    let day = `${d.getDate()}`;
    const year = d.getFullYear();

    if(day.length<2){
        day= `0${day}`;
    }
    const monthname=["January","February","March","April","May","June","July","August","September","October","November", "December"]

    return [day,monthname[month],year].join(' ');
}

export default FormatDate