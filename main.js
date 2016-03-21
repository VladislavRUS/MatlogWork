var graph;
var secondGraph;
var n;

function check(value){
    graph = generate(value);
    setTimeout(function(){},4000);
    n = value;
    var count = 0;
    
    while(findSetAlg(graph) == false){    
        var rI = Math.floor(Math.random() * n);
        var rJ = Math.floor(Math.random() * n);
        graph[rI][rJ] = 0;
        graph[rJ][rI] = 0;
    } 
    startGraph();
}

function getEdges(){
    var edges = new Array;
    for(var i = 0; i < n; i++){
        edges[i] = 0;
    }
    
    for(var i = 0; i < graph[0].length; i++){
        for(var j = 0; j < graph[0].length; j++){
            if(graph[i][j] == 1){
                edges[i] = edges[i]+1;
            }    
        }
    }
    return edges;
}

function deleteEdgeSoTheGraphIsKnot(value){
    var rI = Math.floor(Math.random() * n);
    var rJ = Math.floor(Math.random() * n);
    
    while(isKnot(value, rI, rJ) == false){
        rI = Math.floor(Math.random() * n);
        rJ = Math.floor(Math.random() * n);
        printGraph(secondGraph);
    }
    graph[rI][rJ] = 0;
    graph[rJ][rI] = 0;
}

function isKnot(value, rI, rJ){
    var used = new Array(value);
    secondGraph = Object.create(graph);
    secondGraph[rI][rJ] = 0;
    secondGraph[rJ][rI] = 0;
    
    for(var i = 0; i < value; i++){
        used[i] = false;
    }
    
    dfs(used, 0);
    var cnt = 0;
    for(var l = 0; l < used.length; l++){
        if(used[l] == true)
            cnt++;
    }
    return (cnt == value);
}

function printGraph(graph){
    $("#place").append('printing');
    $("#place").append('Матрица графа: <br>');    
    
    var k = n;
    for(var i = 0; i < k; i++){
        for(var j = 0; j < k; j++){
            $("#place").append(graph[i][j] + ' ');        
        }
        $("#place").append('<br>');
    }
    $("#place").append('<br>');
}

document.getElementById('btn').onclick = function(){
    var value = document.getElementById('amount').value;
    if(value == ''){
        alert('Enter value!');
    }
    else{
        check(value);
    }
}

function dfs(used, pos){
    used[pos] = true;
    for(var c = 0; c < graph[0].length; c++){
        if((secondGraph[pos][c] == 1) && (used[c] == false)){
            dfs(used,c);
        }
    }
}

Array.prototype.contains = function(el){
    return this.indexOf(el) > -1;
}