const findCount = (N, K, Arr) => 
{
    let occurence = 0;
    for(let i = 0; i < N; i++) {
      if(Arr[i] == K) {
        occurence++;
      }
    }
    
    return occurence;
};
 