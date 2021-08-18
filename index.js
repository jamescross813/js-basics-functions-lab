// Code your solution in this file!
function distanceFromHqInBlocks(distance){
 let hq = 42
 if (distance < 42){
    return hq - distance
 }else{
     return distance - hq
 }
}

function distanceFromHqInFeet(distance){    
    return distanceFromHqInBlocks(distance)*264
}

function distanceTravelledInFeet(startBlock, endBlock){
    let distanceTravelled 
    if (startBlock>endBlock){
        distanceTravelled = startBlock - endBlock
    }else{
        distanceTravelled = endBlock - startBlock
    }
    return distanceTravelled*264
}

function calculatesFarePrice(start, destination){
    let distanceTravelled = distanceTravelledInFeet(start, destination)
    if(distanceTravelled < 400){
        return 0
    }else if(distanceTravelled > 400 && distanceTravelled < 2000){
        return (distanceTravelled - 400)*0.02
    }else if (distanceTravelled >2000 && distanceTravelled < 2500){
        return 25
    }else{
        return 'cannot travel that far'
    }
}