//Функция проверяет может ли вершина V быть вставлена
//На индекс pos в гамильтоновом цикле (path)
function isSafe(v, graph, path, pos){
    //Проверим, что добавляемая вершина смежна с предыдущей в пути
    if(graph[path[pos-1]][v] == 0){
        return false;
    }
    
    //Проверим, что вершина уже не находится в пути
    for(var i = 0; i < pos; i++){
        if(path[i] == v){
            return false;
        }
    }
    return true;
}


//Основная функция для нахождения гамильтонова цикла
function hamiltonianCycleUtil(graph, path, pos){
    //Основной случай: если все вершины включены в путь
    if(pos == graph[0].length){
        //Если последняя добавленная вершина смежна с первой
        //То цикл найден
        if(graph[path[pos-1]][path[0]] == 1){
            return true;
        }
        //Иначе нет
        else{
            return false;
        }
    }
    //Пробуем другие вершины, как следующий кандидат для цикла
    //Не берем ноль, так как он является стартовой точкой
    for(var v = 1; v < graph[0].length; v++){
        //Если вершина может быть добавлена в гамильтонов цикл
        if(isSafe(v, graph, path, pos)){
            path[pos] = v;
            //Рекурсивно конструируем путь
            if(hamiltonianCycleUtil(graph, path, pos + 1) == true){
                return true;
            }
            //Если добавление вершины V не ведет к решению, то удалим ее
            path[pos] = -1;
        }
    }
    //Если ни одну вершину нельзя добавить в цикл, то false
    return false;
}

function hamCycle(graph){
    path = new Array(graph.length);
    for(var i = 0; i < graph.length; i++){
        path[i] = -1;
    }
    
    path[0] = 0;
    if(hamiltonianCycleUtil(graph, path, 1) == false){
        return false;
    }
    else{
        return true;
    }
}