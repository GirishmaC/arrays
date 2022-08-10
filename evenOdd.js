const findEvenOdd = (N, Arr) => 
{
    let oddNum= 0;
    let evenNum= 0;
    let B=[];
    for(let i=0; i<N; i++){
      if(Arr[i]%2 == 0 ){
        evenNum=evenNum+Arr[i];
      }
      else{
        oddNum=oddNum+Arr[i];
      }
    }
    B[0]=evenNum ;
    B[1]=oddNum;
    return B;  
};

