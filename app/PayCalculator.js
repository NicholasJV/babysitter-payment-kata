function CalculatePayment(startTime, bedTime, endTime) {
    var baseRate = 12;
    var postBedTimeRate = 8;
    var postMidnightRate = 16

    startTime = startTime.split(':')[0];
    bedTime = bedTime.split(':')[0];
    endTime = endTime.split(':')[0];
    
    var preBedTimeHours = 0
    if (bedTime !== startTime) {
        var preBedTimeHours = bedTime - startTime;
    } 

    var postBedTimeHours = 0
    if (bedTime < endTime) {

        postBedTimeHours = 12 - bedTime;
    } else if (endTime < 12) {
        postBedTimeHours = endTime - bedTime;
    }

    var postMidnightHours = 0
    if (endTime < 5) {
        postMidnightHours = endTime 
    } 

    var preBedTimePay = preBedTimeHours * baseRate; // 60
    var postBedTimePay = postBedTimeHours * postBedTimeRate;
    var postMidnightPay = postMidnightHours * postMidnightRate

    // console.log("preBedTimePay:", preBedTimePay, "postBedTimePay", postBedTimePay, "postMidnightPay", postMidnightPay);
    return preBedTimePay + postBedTimePay + postMidnightPay;

}