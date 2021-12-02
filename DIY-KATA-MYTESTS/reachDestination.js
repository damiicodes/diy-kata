

function reachDestination(distance, speed) {

    let calcTime = (distance / speed)
    let roundUp = Math.ceil(calcTime / 0.5) * 0.5;
    let words = "I should be there in" + " " + roundUp + " " + "hours."
    return words;

}


module.exports = reachDestination