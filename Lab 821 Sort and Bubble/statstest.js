function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            
        }
    }
    return arr;
}

function getMean(arr){
    let temp = 0;
    for(let i = 0; i < arr.length; i++){
        
        temp = temp + arr[i];
    }
    return temp/2;
}

function getMedian(arr){
    let num = arr[Math.floor(arr.length/2)];
        if (arr.length % 2 === 0){
            let num2 = arr[Math.floor(arr.length/2) - 1];
            let num3 = num + num2;
            return num3/2;
        } else {
            return num;
        }
    
}

function getMode(max, arr){
    let temp = [];
    for (let i = 0; i <= max; i++){
        temp.push(0);
    }

    for(let i = 0; i < arr.length; i++){
        temp[arr[i]]++;
    }

    let maxVal = 0;
    for (let i = 0; i < temp.length; i++){
        if(temp[i] > maxVal){
            maxVal = temp[i];
        }
    }

    let mode = [];
    for(let i = 0; i < temp.length; i++){
        if(temp[i] === maxVal){
            mode.push(i);
        }
    }
    return mode;
}