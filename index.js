// Code your solution in this file!
;
const distanceFromHqInBlocks = (passengerSt) => {
    let headquatersStr = 42
    let distance = headquatersStr - passengerSt
    if (distance < 0){
        distance *= -1
    }
    return distance
}
const distanceFromHqInFeet =(blocks)=>{
    let distanceInFeet = distanceFromHqInBlocks(blocks) * 264
    return distanceInFeet
}

const distanceTravelledInFeet =(start, destination) =>{
    let distance = (destination-start) * 264
    if (destination < distance ) {
        
        return distance
    } else {
        distance = distance *(-1)
        return distance
    }
      

    
    
}
const calculatesFarePrice = (start, destination) => {
    let fare;
    let distance = (destination- start) * 264
    if (distance <0){
        distance = distance *(-1)
    }
    if (distance < 400){
        fare = 0;
        return fare
    } else if (distance > 400 && distance <2000){
        fare = (distance - 400)* 0.02
        return fare
    } else if (distance >2000 && distance < 2500){
        fare = 25
        return fare
    } else {
        return 'cannot travel that far'
    }
}