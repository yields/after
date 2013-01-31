
var after = require('after');

// assert

function assert(expr, ms){
  if (expr) return;
  throw new Error(ms || 'does not work!');
}

describe('after(a, b)', function(){
  it('should insert b after a', function(){
    var ul = document.createElement('ul');
    var a = document.createElement('li');
    var b = document.createElement('li');
    b.innerText = 'Hello, World!';
    ul.appendChild(a);
    after(a, b);
    assert(a.nextSibling === b);
  });

  it('should insert before if `before` argument is true', function(){
    var ul = document.createElement('ul');
    var a = document.createElement('li');
    var b = document.createElement('li');
    b.innerText = 'Hello, World';
    ul.appendChild(a);
    after(a, b, true);
    assert(b.nextSibling === a);
  })
});
