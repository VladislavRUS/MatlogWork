function findSet(graph){
    var set = new Array;
    var vertexes = new Array;
    
    for(var i = 0; i < graph[0].length; i++){
        vertexes.push(i);
    }
    
    while(vertexes.length > 0){
        var node = vertexes[0];
        set.push(node);
        vertexes.splice(vertexes.indexOf(node),1);
        for(var j = 0; j < graph[0].length; j++){
            if(graph[node][j] == 1){
                vertexes.splice(vertexes.indexOf(j),1);
            }
        }
    }
    //$("#place").append(set + "<br>");
    if(2*set.length > graph[0].length+1) {
        alert(set);
        //printGraph(graph);
    }
    return (2*set.length > graph[0].length);
}

function findSetAlg(graph){
    var vertexes = [];
    for(var i = 0; i < graph[0].length; i++){
        vertexes[i] = i;
    }
    var labels = [];
    for(var j = 0; j < graph[0].length; j++){
        labels[j] = false;
    }
    var sets = new Array;
    for(var k = 0; k < vertexes.length; k++){
        for(var i = 0; i < vertexes.length; i++){
            var current = vertexes[i];
            if(allNeighboursAreFalse(current, labels, graph)){
                labels[current] = true;
            }
        }
        var cnt = 0;
        for(var i = 0; i < labels.length; i++){
            if(labels[i] == true){
                cnt++;
            }
        }
        sets.push(cnt);
        vertexes = right(vertexes);
    }
    var max = sets[0];
    for(var i = 1; i < sets.length; i++){
        if(sets[i] > max){
            max = sets[i];
        }
    }
    //alert(max);
    return (2 * max > graph[0].length + 1);
}

function allNeighboursAreFalse(v, labels, graph){
    var neighb = [];
    for(var i = 0; i < graph[0].length;i++){
        if(graph[v][i] == 1){
            neighb.push(i);
        }
    }
    for(var i = 0; i < neighb.length; i++){
        if(labels[neighb[i]] == true){
            return false;
        }
    }
    return true;
}

function right(array){
    var back = [];
    back[0] = array[array.length-1];
    for(var i = 1; i < array.length;i++){
        back[i] = array[i-1];
    }
    //alert('Back' + back);
    return back;
}