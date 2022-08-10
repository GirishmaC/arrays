function arrayMin(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          num = arr[i];
          arr[i] = arr[j];
          arr[j] = num;
        }
      }
    }
    return arr[0];
  }
  
  function arrayMax(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          num = arr[i];
          arr[i] = arr[j];
          arr[j] = num;
        }
      }
    }
    return arr[0];
  }
  