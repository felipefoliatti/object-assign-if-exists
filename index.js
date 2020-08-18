
/**
 * recursive-assign
 * @param {object} target
 * @param {object} source
 */
const _ = require('lodash');

function assignIfExists(target, source) {
  var ks = _.keys(source)
  _.each(ks, function(key) {

    var itarget = target[key];
    var isource = source[key];

    if (_.isPlainObject(itarget) && _.isPlainObject(isource)) {
        assignIfExists(target[key], isource)
    } else {
      //only assign if exists
      if (target.hasOwnProperty(key)) {
        if (_.isFunction(isource)) {
          target[key] = isource(itarget)
        } else {
          target[key] = isource
        }
      }
   }
  

  })
  return target;
}

module.exports = exports.default = assignIfExists;
