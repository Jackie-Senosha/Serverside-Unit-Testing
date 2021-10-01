let assert = require("assert");
let greet = require("../greet");

describe('The greet function' , function(){

    it('should return "Hello, Jackie" when I greet Jackie' , function(){
       
    assert.equal('Hello, Jackie', greet('Jackie'));
    
    });

    it('should return "Hello, Tebatso" when I greet Tebatso' , function(){
       
        assert.equal('Hello, Tebatso', greet('Tebatso'));
        
        });

    it('should return "Hello" when no name is entered' , function(){
       
            assert.equal('Hello', greet());
            
            });

});