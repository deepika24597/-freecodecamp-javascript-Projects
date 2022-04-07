const denomination = [
  
    { name: "ONE HUNDRED", value: 100.0 },
      { name: "TWENTY", value: 20.0 },
      { name: "TEN", value: 10.0 },
      { name: "FIVE", value: 5.0 },
      { name: "ONE", value: 1.0 },
      { name: "QUARTER", value: 0.25 },
      { name: "DIME", value: 0.1 },
      { name: "NICKEL", value: 0.05 },
      { name: "PENNY", value: 0.01 }
  ];
  
  function checkCashRegister(price, cash, cid) {
  
      let output = {status: null, change: []};
      let change = cash - price;
  
      
      let register = cid.reduce(function(acc, curr){
          acc.total += curr[1];
          acc[curr[0]] = curr[1];
          return acc;
      }, {total: 0 });
  
      
      if(register.total === change) {
          output.status = "CLOSED";
          output.change = cid;
          return output;
      }
  
      if(register.total < change) {
          output.status = "INSUFFICIENT_FUNDS";
          return output;
      }
  
      
      let change_array = denomination.reduce(function(acc, curr){
          let value = 0;
          while(register[curr.name] > 0 && change >= curr.value) {
              change -= curr.value;
              register[curr.name] -= curr.value;
              value += curr.value;
  
              
              change = Math.round(change * 100) / 100;
          }
  
          
          if(value > 0) {
              acc.push([curr.name, value]);
          }
          return acc; 
      }, []); 
  
      
      if(change_array.length < 1 || change > 0) {
          output.status = "INSUFFICIENT_FUNDS";
          return output;
      }
  
    
      output.status = "OPEN";
      output.change = change_array;
      console.log(output);
      return output;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);