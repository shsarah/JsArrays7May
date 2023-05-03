//#region task1

function findDuplicate(array){
    if(Array.isArray(array)!==true){
        return false;
    }
    else if(array.length===0){
        return false;
    }
    else{
        for (let index = 0; index < array.length; index++) {
            if(typeof array[index]!=="number"){
                return false;
            }
            else{
                let count=0;
                for(let j=0;j<=index;j++){
                    if(array[index]===array[j]){
                        count++;
                    }
                }
                if(count>=2){
                    return array[index];
                }
            }
        }
    }
}

//#endregion

//#region task2

function findMaxElement(array){
    if(Array.isArray(array)!==true){
        return false;
    }
    else if(array.length===0){
        return false;
    }
    else{
        for (let index = 0; index < array.length; index++) {
            if(typeof array[index]!=="number"){
                return false;
            }
            else if(typeof array[array.length-1]==="string"||typeof array[array.length-1]==="symbol"){
                return false;
            }
            else{
                array.sort(function(a,b){return a-b});
                return array[array.length-1];
            }
        }
    }
}

//#endregion

//#region task3 

function arrayHandler(array){
    if(Array.isArray(array)!==true){
        return false;
    }
    else if(array.length===0){
        return false;
    }
    else{
        for (let index = 0; index < array.length; index++) {
            if(typeof array[index]!=="number"){
                return false;
            }
            else{
                array.forEach((element,index) => {
                    array[index]=element*2;
                });
                return array;
            }
        }   
    }
}

//#endregion
