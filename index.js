// Code your solution in this file!
const hqLocation = 42;

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs (hqLocation - pickupLocation);


}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264;


}

function distanceTravelledInFeet (startBlock, destinationBlock) {

    return Math.abs ((startBlock-destinationBlock)*264)

}

function calculatesFarePrice (start, destination) {
    let distanceTraveled = distanceTravelledInFeet (start, destination) 

    let billableDistance = distanceTraveled - 400;

    if (distanceTraveled <= 400) {
        return 0
    }

    else if (distanceTraveled > 400 && distanceTraveled <= 2000){
        return billableDistance * 2  / 100;
    }

    else if (distanceTraveled > 2000 && distanceTraveled <=2500){
        return 25
    }

    else return  'cannot travel that far'
    
}

