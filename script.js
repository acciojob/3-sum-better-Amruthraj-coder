function threeSum(arr, target) {
// write your code here
	var sum=10000000;
	var n = arr.length;
	for(var i=0; i<n; i++){
		for(var j=i+1; j<n; j++){
			for(var k=j+1; j<n; j++){
				if(Math.abs(arr[i]+arr[j]+arr[k]-target)<sum){
					sum = arr[i]+arr[j]+arr[k];
				}
			}
		}
	}
  return sum;
}

module.exports = threeSum;
