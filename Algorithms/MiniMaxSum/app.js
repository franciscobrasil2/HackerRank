const arr = [1, 2, 3, 4, 5]

const arrSum = []

arrSum.push(arr[0] + arr[1] + arr[2] + arr[3])
arrSum.push(arr[0] + arr[1] + arr[2] + arr[4])
arrSum.push(arr[0] + arr[1] + arr[3] + arr[4])
arrSum.push(arr[0] + arr[2] + arr[3] + arr[4])
arrSum.push(arr[1] + arr[2] + arr[3] + arr[4])

console.log(Math.min(...arrSum) + " " + Math.max(...arrSum));
