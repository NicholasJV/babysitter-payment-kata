// function getPreBedTimeHours(startTime, bedTime){
//     var preBedTimeHours = 0

//     if (bedTime !== startTime) {
//         preBedTimeHours = bedTime - startTime;
//     } 
//     return preBedTimeHours
// }

// function getPostBedTimeHours(bedTime, endTime){
//     var postBedTimeHours = 0
    
//     if (bedTime < endTime) {
//         postBedTimeHours = 12 - bedTime
//     } else if (endTime < 12) {
//         postBedTimeHours = endTime - bedTime
//     }
//     return postBedTimeHours
// }

// function getPostMidnightHours(endTime){    
//     if (endTime < 5) {
//         return endTime 
//     } else return 0