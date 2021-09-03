function warnTheSheep(queue) {
    let listSheep = queue.reverse(); // untuk membalikan index, awal ke akhir & akhir ke index
    for(let i = 0; i < queue.length; i++) {
        if(listSheep[0] === "wolf")
        return "Pls go away and stop eating my sheep";
        else
        return "Oi! Sheep number " + listSheep.indexOf("wolf") + "! You are about to be eaten by a wolf!";
    }
}