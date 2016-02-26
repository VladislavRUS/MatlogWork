function generate(v){
    var matr = new Array(v);
    for(var i = 0; i < v; i++){
        matr[i] = new Array(v);
        for(var k = 0; k < v; k++){
            if(i !== k){
                matr[i][k] = 1;
            }
            else{
                matr[i][k] = 0;
            }
        }
    }
    return matr;
}

function hamCycleInRandomGraph(graph, count){
    var n = graph[0].length;
    if(count > (n*(n-1)/2) / 2){
        return false;
    }
    else {
        if(hamCycle(graph) == false){
            var rI = Math.floor(Math.random() * n) + 1;
            var rJ = Math.floor(Math.random() * n) + 1;
            graph[rI][rJ] === 0;
            graph[rJ][rI] === 0;
            hamCycle(graph);
        }
        else {
            return true;
        }
    }
}