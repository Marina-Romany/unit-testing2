var counter = {
  currentValues: function () {
    return 1;
  },
};
function sumOfValues() {
 return counter.currentValues();
}

describe("mock and spy", function () {
  it("spying", function () {
      spyOn(counter, "currentValues")
      sumOfValues(counter)
      expext(counter.currentValues).toHaveBeenCalled()
      expect(counter.currentValues).toHaveBeenCalledTimes(1)

  });

  
  // mock a function that takes any string and return number, call it twice and expect that it is called twice
  describe("mock" , function(){
    var calculateSum;
    beforeEach(function(){
      calculateSum = jasmine.createSpyObj("calculateSum" , ["sum" ,"sub"])
      calculateSum.sum()
      calculateSum.sub(4)
    })

  it("mocking", function () {
     expect(calculateSum.sum).toBeDefined();
     expect(calculateSum.sum).toHaveBeenCalled();
     expect(calculateSum.sub).toHaveBeenCalledOnceWith(4)
     expect(calculateSum.sub).toHaveBeenCalledOnceWith(jasmine.anything())

  })
})
