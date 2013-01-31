
# after

  insert after the given `element`

## Installation

    $ component install yields/after

## Example

```js
var ul = document.createElement('ul');
var a = document.createElement('li');
var b = document.createElement('li');
b.innerText = 'Hello, World!';
ul.appendChild(a);
after(a, b);
a.nextSibling === b; // > true
a.nextSibling.innerText; // > Hello, World
```

## API

  ### after(a, b)

  Insert `b` after `a`.

## Tests

```bash
$ git clone https://github.com/yields/after
$ cd after && component build
$ open test/index.html
```

## License

  MIT
