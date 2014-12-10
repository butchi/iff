# if-function

JavaScript if-function.

## demo
The demo is [here](http://butchi.github.io/iff/) http://butchi.github.io/iff/

## usage
```js
iff(condition, options);

iff(condition, function_if_true, function_if_false);
```

ex)

```js
iff(1 + 1 === 2, {
  then: function() {
    alert('true!');
    return 5;
  },
  else: function() {
    alert('false!');
    return 3;
  }
});
```
