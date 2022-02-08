
describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  beforeEach(function(){
    console.log(pos_vals , neg_vals);
  })
  afterEach(function(){
    console.log("done")
  })
   it("at before all assign pos vals with array of positive numbers" , function(){
     expect(positive(pos_vals).toGreaterThan([0,0,0]))
   });

   it("and assign negative vals with negative array of numbers" ,  function(){
     expect(positive(neg_vals).toLessThan([0,0,0]))
   });

   it(" assign vals to pos_vals.concat(neg_vals)" , function(){ 
     expect((pos_vals).concat(neg_vals))
   });

   it("sum positive number" , function(){
     expect(sum(pos_vals)).toEqual(6)
   })

   it("sum negative number" , function(){
     expect(sum(neg_vals)).toEqual(-6)
   })

});





