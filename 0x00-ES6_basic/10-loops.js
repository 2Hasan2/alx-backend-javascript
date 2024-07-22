export default function appendToEachArrayValue(array, appendString) {
  const tmpArray = [];
  for (const ele of array) {
    tmpArray.push(appendString + ele);
  }

  return tmpArray;
}
