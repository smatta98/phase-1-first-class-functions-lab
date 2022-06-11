const returnFirstTwoDrivers = function(arrayName){
return arrayName.slice(0,2)
}

const returnLastTwoDrivers = function(arrayName){
    return arrayName.slice(2,4)
    }

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){return fare*multiplier}
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers= (arrayName,funcName) => {
    return funcName(arrayName)
}

