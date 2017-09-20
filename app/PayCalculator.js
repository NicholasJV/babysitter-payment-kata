function CalculatePayment(startTime, bedTime, endTime) {
    var baseRate = 12;
    var postBedTimeRate = 8;
    var postMidnightRate = 16

    // TODO: check if endTime after midnight ( < 5:00 )
    
    startTime = startTime.split(':');
    bedTime = bedTime.split(':');
    endTime = endTime.split(':');
    
    var preBedTimeHours = 0
    if (bedTime[0] !== startTime[0]) {
        var preBedTimeHours = bedTime[0] - startTime[0];
    } 

    var postBedTimeHours = 0
    if (bedTime[0] < 12 && bedTime[0] > 5) {
        postBedTimeHours = endTime[0] - bedTime[0];
    } 

    var postMidnightHours = 0
    if (endTime[0] < 5) {
        postMidnightHours = endTime[0] 
    } 
    // var totalTime = endTime[0] - startTime[0];

    var preBedTimePay = preBedTimeHours * baseRate;
    var postBedTimePay = postBedTimeHours * postBedTimeRate;
    var postMidnightPay = postMidnightHours * postMidnightRate

    return preBedTimePay + postBedTimePay + postMidnightPay;

}