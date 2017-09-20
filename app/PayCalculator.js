function CalculatePayment(startTime, bedTime, endTime) {
    var baseRate = 12;
    var postBedTimeRate = 8;
    var postMidnightRate = 16

    startTime = startTime.split(':');
    bedTime = bedTime.split(':');
    endTime = endTime.split(':');
    
    var preBedTimeHours = 0
    if (bedTime[0] !== startTime[0]) {
        var preBedTimeHours = bedTime[0] - startTime[0];
    } 

    var postBedTimeHours = 0
    if (bedTime[0] < endTime[0]) {

        postBedTimeHours = 12 - bedTime[0];
    } else if (endTime[0] < 12) {
        postBedTimeHours = endTime[0] - bedTime[0];
    }

    var postMidnightHours = 0
    if (endTime[0] < 5) {
        postMidnightHours = endTime[0] 
    } 

    var preBedTimePay = preBedTimeHours * baseRate; // 60
    var postBedTimePay = postBedTimeHours * postBedTimeRate;
    var postMidnightPay = postMidnightHours * postMidnightRate

    // console.log("preBedTimePay:", preBedTimePay, "postBedTimePay", postBedTimePay, "postMidnightPay", postMidnightPay);
    return preBedTimePay + postBedTimePay + postMidnightPay;

}