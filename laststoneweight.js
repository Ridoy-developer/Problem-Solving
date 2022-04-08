let stones = [8,10,4];

let lastStoneWeight = function(stones) {    
    // base conditoin
    if (stones.length == 1) {
        return stones[0];
    } else if (stones.length <= 0) {
        return 0;
    }
    
    stones.sort(function(a, b) { return a - b });

    // loop through every element for checking
    for (let i = (stones.length-1); i >= 0; i--) {
        if (stones[i] == stones[i-1]) {
            stones.splice(i, 1);
            stones.splice(i-1, 1);
            if (stones.length <= 0) {
                return 0;
            }            
            
            i--;
        } else {
            if (stones.length >= 2) {
                // getting new value after destroyed stone
                let y = stones[i] - stones[i-1];
                stones.push(y);
                // removing existing element
                stones.splice(i, 1);
                stones.splice((i-1), 1)
                stones.sort(function(a, b) {return a - b});
           }
        }
    }

    return stones[0];
}

console.log(lastStoneWeight(stones));