function CalculatePayment(startTime, bedTime, endTime) {
    var baseRate = 12,
        postBedTimeRate = 8,
        postMidnightRate = 16

    startTime = startTime.split(':')[0]
    bedTime = bedTime.split(':')[0]
    endTime = endTime.split(':')[0]
    
    var preBedTimePay = getPreBedTimeHours(startTime, bedTime) * baseRate
    var postBedTimePay = getPostBedTimeHours(bedTime, endTime) * postBedTimeRate
    var postMidnightPay = getPostMidnightHours(endTime) * postMidnightRate

    //console.log("preBedTimePay:", preBedTimePay, "postBedTimePay", postBedTimePay, "postMidnightPay", postMidnightPay)
    return preBedTimePay + postBedTimePay + postMidnightPay
}

function getPreBedTimeHours(startTime, bedTime){
    var preBedTimeHours = 0

    if (bedTime !== startTime) {
        preBedTimeHours = bedTime - startTime;
    } 
    return preBedTimeHours
}

function getPostBedTimeHours(bedTime, endTime){
    var postBedTimeHours = 0
    
    if (bedTime < endTime) {
        postBedTimeHours = 12 - bedTime
    } else if (endTime < 12) {
        postBedTimeHours = endTime - bedTime
    }
    return postBedTimeHours
}

function getPostMidnightHours(endTime){    
    if (endTime < 5) {
        return endTime 
    } else return 0
}