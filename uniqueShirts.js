function Unique_Shirts (arr,N) {
    let shirts=""
        let wear=0,i,j;
        for(i=0;i<N;i++){
            let Shirt=0;
            for(j=0;j<N;j++){
                if(arr[i]==arr[j]){
                    Shirt++;
                }
    
            }
            if(Shirt==1){
                shirts=shirts+arr[i];
                wear++;
            }
        
    }
    return wear;
    
    }

    