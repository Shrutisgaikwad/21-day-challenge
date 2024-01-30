
function getCurrentDateTime() {
  
    let currentDate = new Date();

    let options = {
        timeZone: 'Asia/Kolkata',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    };
    let formattedDateTime = currentDate.toLocaleString("en-GB", options);
    console.log("Current Date and Time in Pune, India:", formattedDateTime);
}
getCurrentDateTime();
