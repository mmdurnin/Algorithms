//bubble sort
function swap(array, idx1, idx2) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;
    return array;
}

function bubbleSort(array) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, (i + 1));
        sorted = false;
      }
    }
    j++;
  }
  return array;
}


//selection sort
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    tempIdx = i;
    j = i + 1;
    console.log(arr)
    for (let j = i + 1; j < arr.length; j++) {
        console.log(arr[j])
        console.log(arr[i])
      if (arr[j] < arr[tempIdx]) {
        tempIdx = j;
      }
    }
    swap(arr, i, tempIdx);
  }
  return arr;
}


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (var j = i - 1; j >= 0 && current < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = current; 
    //arr[j] is the # to the left of (/lower than) the insertion index (j-- then the loop stops)
    //arr[j+1] is the array at the insertion index
    //"arr[j+1] = current" is the actual insertion. Every step along the way we were replacing the number to the right with the number at idx j
    //At the final step, the # to the right has been replaced with number at idx j, and target number needs to be updated with its replacement
  }
  return arr;
}

console.log(insertionSort([1, 6, 3, 2, 2, 5]))