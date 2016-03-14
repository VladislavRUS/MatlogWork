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

