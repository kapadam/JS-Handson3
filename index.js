// 1

const Find_Digits = (N) => 
        {
          var count=1;
          while(Math.floor(N/10)>=1){
            N=Math.floor(N/10);
            ++count;
          }
          return count;
        };
// 2

const Find_Five = (N) => 
        {
          var count=0;
             while(N>0){
               if(N%10===5){
                 count++;
               }
               N=Math.floor(N/10);
             }
             return count;
        }; 
// 3

const findSum = (n) => {
    var sum=0;
    while(n>0){
        if(n%2===0){
        sum+=n;
        }
        n--;
    }
    return sum;
};
// 4
const Number_Sum = (N) => {
	var sum=0;
	var count=0;
	while(Math.floor(N)>0){
	  sum=N%10;
	  N=Math.floor(N/10);
	  count=count+sum;
	}
	return count;
};
// 5
const Print_Odd = (N) => 
        {
          console.log(2)
             for(let i=2;i<=N;i++){
               if(i%2!==0){
                 console.log(i)
               }
             }
        };
// 6
const Print_pattern = (N) => 
        {
          for(let i=1;i<=N;i++){
              let str="";
                for(let j=1;j<=i;j++){
                    str=str+"*";
                }
              console.log(str);
            }
        };
// 7
const Prime_Check = (N) => 
        {
          let count=0;
             if (N === 1) {
            return "NO";
             }
             else{
               for(let i=2;i<=N;i++){
                 if(N%i===0){
                 count++;
                 }
               }
             }
             if(count===1){
               return "YES";
             }
             else{
               return "NO";
             }
        };
// 8
const printNumbers = (n) => {
    for(let i=1;i<=n;i++){
      console.log(i)
    }
};
// 9
const Print_Table = (N) => 
    {
        for(let i=1;i<=10;i++){
          console.log(N+" * "+i+" = "+N*i);
        }
    };