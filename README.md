
# THIS LIB
This lib only assign item to target object.
The behavior of this lib is intented to have a default object that has the config (target) and the new object that holds new configs (source).
Only properties that exists in the target object will be assign and no new property will be created.

# USAGE

``` shell
npm i git+https://github.com/felipefoliatti/object-assign-if-exists.git
```

```javascript
const { equal } = require('assert')
const assign = require('object-assign-if-exists')

var target = {
      a: '3',
      b: true,
      c: {
        d: 'att1',
        e: 0,
        f: {
          w: 'att2'
        },
        g: 'att3',
        y: [7],
        n: 'att7',
        func: 'func'
      }
    }

    var source = {
      a: 6,
      b: false,
      c: {
        d: 'att4',
        e: 56,
        i: 'att5',
        f: {
          w: (ori) => ori + '5',
          z: 'att6'
        },
        y: '90',
        func: () => () => 'func2'
      }
    }

    assign(target, source);
    
    //should asign, as it is in the target
    equal(target.a, 6);
    equal(target.b, false);
    equal(target.c.d, 'att4');
    equal(target.c.g, 'att3');
    equal(target.c.f.w, 'att25');
    equal(target.c.y, '90');
    equal(target.c.n, 'att7');
    equal(target.c.func(), 'func2');

    //should not asign, as it is not in the target
    equal(target.c.i, undefined);
    equal(target.c.f.z, undefined);
```