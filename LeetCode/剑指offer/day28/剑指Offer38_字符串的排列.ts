function permutation(s: string): string[] {
    let result:string[] = [];
    let sArr:string[] = Array.from(s).sort();
    let n = sArr.length;
    let flag:boolean[] = []
    const searchStr = (index:number,n:number,curStr:string[])=>{
        if (index === n){
            result.push(curStr.join(''));
            return ;
        }
        for (let i = 0; i < n; i++) {
            if (flag[i]||(i>0&&!flag[i-1]&&sArr[i-1]===sArr[i]))
                continue;
            flag[i]=true;
            curStr.push(sArr[i]);
            searchStr(index+1,n,curStr);
            curStr.pop();
            flag[i]=false;
        }
    }

    searchStr(0,n,[])

    return result;
};

