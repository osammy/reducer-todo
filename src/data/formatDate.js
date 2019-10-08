const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getDayFormat = day => {

        var format = "";

        switch (day) {
            case 1:
                format = "st";
                break;
            case 2:
                format = "nd";
                break;
            case 3:
                format = "rd";
                break;
            default:

                format = "th"

        }
        return format;
    }

export const formatDate = date => {
            if(typeof date === 'string') date = new Date(date)
            let formattedDate;
  
            var day =  date.getDate();
            var month = date.getMonth(); //Be careful! January is 0 not 1
            var year =  date.getFullYear();
    
            const monthInString = months[month];

            const dDayFormat = getDayFormat(day);
    
            formattedDate = `${day}${dDayFormat}, ${monthInString} ${year}`;
    
            return formattedDate;
}

export const formatDateAndTime = date => {
    if(typeof date === 'string') date = new Date(date);
    if(!date) return null;
    
    let AM_OR_PM;
    let hours =  date.getHours();
    
    if(hours < 12) {
        AM_OR_PM = "AM"
    } 

    else if(hours > 12) {
        hours = hours - 12;
        AM_OR_PM = "PM"
    }

    else AM_OR_PM = "PM";

    
    var minutes = date.getMinutes(); 

    const theTime = `${hours}:${minutes}${AM_OR_PM}`;

    const theDay = formatDate(date);

    const formattedDateAndTime = `${theDay}, ${theTime}`;


    return formattedDateAndTime;
}