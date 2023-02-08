/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
 var possibleBipartition = function(n, dislikes) {
    const father = new Array(n+1).fill(-1);
    const edge = new Array(n+1).fill(0);
    for(let i=0;i<=n;i++){
        edge[i]=[];
    }
    for(let p of dislikes){
        edge[p[0]].push(p[1]);
        edge[p[1]].push(p[0]);
    }

    for (let i = 1; i <= n; ++i) {
        for (let j = 0; j < edge[i].length; ++j) {
            union(edge[i][0], edge[i][j], father);
            if (isconnect(i, edge[i][j], father)) {
                return false;
            }
        }
    }
    return true;

};


const union = (x, y, father)=>{
    x = find(x,father);
    y = find(y,father);
    if(x === y){
        return;
    }
    if (father[x]<father[y]){
        [x,y]=[y,x];
    }
    father[x]+=father[y];
    father[y]=x;
}


const find = (x, father)=>{
    return father[x]<0 ? x:find(father[x],father);
}


const isconnect  = (x,y,father)=>{
    x = find(x,father);
    y = find(y,father);
    return x === y;
}