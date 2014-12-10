# if-function

JavaScript if-function.

## demo
The demo is [here](http://butchi.github.io/iff/) http://butchi.github.io/iff/

## usage
```js
iff(condition, options);
```

ex)

```js
iff(true, {
  then: function() {
    'do something 1';
    return 5;
  },
  else: function() {
    'do something 2';
    return 3;
  }
});
```
