const nums = [1,2,3,4];

const reducer = (sum, num) => 
{
    return sum += num;
}

const reduced = nums.reduce( reducer,
    0
);

console.log('nums: ' + nums );

console.log('reducer: ' + reducer );

console.log('reduced: ' + reduced );