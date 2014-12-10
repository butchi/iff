;(function() {
  'use strict';

  // ToDo: Functionのprototypeにもifメソッド生やしたい
  // ToDo: iff(opts)バージョン;
  /*
   *  @param condition {anything} argument will convert to Boolean
   *  @return {Boolean or anything} return callback return or condition
   *  @opts {Object}
   *  @opts.then {Function or anything} run if condition is truthy
   *  @opts.else {Function or anything} run if condition is falsy
   */
  function iff(condition, opts, elsef) {
    if(false) {
    } else if(opts == null) {
    } else {
      if(false) {
      } else if(typeof opts === 'function') {
        var _thenFunc = opts;
        if(condition) {
          return _thenFunc();
        } else {
          if(typeof elsef === 'function') {
            return elsef();
          } else {
            return elsef;
          }
        }
      } else if((typeof opts !== 'object') || (opts instanceof Array)) {
        // 普通のobjectはオプション扱いになるので返せない
        var ret;
        if(condition) {
          ret = opts;
        } else {
          if(typeof elsef === 'function') {
            ret = elsef();
          } else {
            ret = elsef;
          }
        }
        return ret;
      } else if(typeof opts === 'object') {
        var _then = opts.then;
        var _else = opts.else;
        // var _elseif = opts.elseif; // 配列にしたい。そもそもiffの入れ子できるので不要？

        if(condition) {
          if(typeof _then === 'function') {
            return _then();
          } else {
            return _then;
          }
        } else {
          if(typeof _else === 'function') {
            return _else();
          } else {
            if(_else === undefined) {
              return elsef;
            } else {
              return _else;
            }
          }
        }
      }
    }

    return !!condition;
  }

  // export
  window.iff = iff;
}());
