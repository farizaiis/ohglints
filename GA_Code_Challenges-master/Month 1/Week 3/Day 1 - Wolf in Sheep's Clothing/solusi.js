function warnTheSheep(queue) {
    let listArr = queue.reverse(); // untuk tuker index, awal ke akhir & akhir ke awal
    for(let i = 0; i < queue.length; i++) {
        if(listArr[0] === "wolf")
        return "Pls go away and stop eating my sheep";
        else
        return "Oi! Sheep number " + listSheep.indexOf("wolf") + "! You are about to be eaten by a wolf!";
    }
}

function warnTheSheep(queue) {
    let listArr = queue.reverse(); // untuk tuker index, awal ke akhir & akhir ke awal
    for(let i = 0; i < queue.length; i++) {
        if(listArr[0] === "wolf")
        return "Pls go away and stop eating my sheep";
        else
        return `Oi! Sheep number ${listArr.indexOf("wolf")}! You are about to be eaten by a wolf!`;
    }
}