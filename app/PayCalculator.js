function CalculatePayment(startTime, endTime) {
    var rate = 12;
    startTime = startTime.split(':');
    endTime = endTime.split(':');

    var totalTime = endTime[0] - startTime[0];
    return totalTime * rate;
}