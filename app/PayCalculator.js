function CalculatePayment(startTime, bedTime, endTime) {
    var baseRate = 12,
        postBedTimeRate = 8,
        postMidnightRate = 16

    var time = timeFormatter(startTime, bedTime, endTime)
    var preBedTimePay = getPreBedTimeHours(time) * baseRate
    var postBedTimePay = getPostBedTimeHours(time) * postBedTimeRate
    var postMidnightPay = getPostMidnightHours(time) * postMidnightRate

    // console.log("preBedTimePay:", preBedTimePay, "postBedTimePay", postBedTimePay, "postMidnightPay", postMidnightPay)
    return preBedTimePay + postBedTimePay + postMidnightPay
}

function timeFormatter(startTime, bedTime, endTime){
    startTime = startTime.split(':')
    bedTime = bedTime.split(':')
    endTime = endTime.split(':')

    var time = {
        startTimeHour: Number(startTime[0]),
        startTimeMinutes: Number(startTime[1]),
        bedTimeHour: Number(bedTime[0]),
        bedTimeMinutes: Number(bedTime[1]),
        endTimeHour: Number(endTime[0]),
        endTimeMinutes: Number(endTime[1])
    }

    time = rounder(time)

    if(time.endTimeHour <= 12 && time.endTimeHour <= 5){
        time.endTimeHour = time.endTimeHour + 7
    } else time.endTimeHour = time.endTimeHour - 5

    time.startTimeHour = time.startTimeHour - 5
    time.bedTimeHour = time.bedTimeHour - 5

    // console.log(time)
    return time;
}

function rounder(time){
    if (time.bedTimeMinutes >= 15) {
        time.bedTimeHour += 1
        time.bedTimeMinutes = 0
    }
    if (time.endTimeMinutes >= 15) {
        time.endTimeHour += 1
        time.endTimeMinutes = 0
    }
    return time
}

function getPreBedTimeHours(time){
    var preBedTimeHours = 0

    if (time.bedTimeHour !== time.startTimeHour) {
        preBedTimeHours = time.bedTimeHour - time.startTimeHour
    }
    // console.log("prebedtimehours", preBedTimeHours) 
    return preBedTimeHours
    
}

function getPostBedTimeHours(time){
    var postBedTimeHours = 0

    if (time.endTimeHour < 7){
        postBedTimeHours = time.endTimeHour - time.bedTimeHour
    } else if (time.bedTimeHour < time.endTimeHour){
        postBedTimeHours = 7 - time.bedTimeHour
    } 
    
    // console.log("postbedtimehours:",postBedTimeHours,
    // "endtimehour:", time.endTimeHour, "bedtimehour:", time.bedTimeHour)
    return postBedTimeHours
}

function getPostMidnightHours(time){    
    if (time.endTimeHour > 7) {
        // console.log(time.endTimeHour - 7)
        return time.endTimeHour - 7
    } else return 0
}

