function CalculatePayment(startTime, bedTime, endTime) {
    var baseRate = 12;
    var bedTimeRate = 8;
    startTime = startTime.split(':');
    bedTime = bedTime.split(':');
    endTime = endTime.split(':');

    var preBedTimeHours = bedTime[0] - startTime[0];
    var postBestTimeHours = endTime[0] - bedTime[0];
    // var totalTime = endTime[0] - startTime[0];
    var preBedTimePay = preBedTimeHours * baseRate;
    var postBedTimePay = postBestTimeHours * bedTimeRate;
    return preBedTimePay + postBedTimePay;
}