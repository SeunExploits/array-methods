let numbers = [1, 2, 3, 4, 5];

function useMap() {
  const result = numbers.map(n => n * 2);
  document.getElementById('output').innerText = "Mapped (×2): " + result.join(", ");
}

function useFilter() {
  const result = numbers.filter(n => n > 2);
  document.getElementById('output').innerText = "Filtered (>2): " + result.join(", ");
}

function useReduce() {
  const result = numbers.reduce((total, num) => total + num, 0);
  document.getElementById('output').innerText = "Reduced (Sum): " + result;
}

function useForEach() {
  console.log("ForEach Logging:");
  numbers.forEach(n => console.log(n));
  document.getElementById('output').innerText = "Check console for forEach logs.";
}

function useSplice() {
  let copy = [...numbers];
  copy.splice(1, 2);
  document.getElementById('output').innerText = "After Splice (index 1, remove 2): " + copy.join(", ");
}
