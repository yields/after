
/**
 * insert the given the element `b` after `a`.
 *
 * @param {Element} a
 * @param {Element} b
 */

module.exports = function(a, b){
  if (!a || !b) throw new TypeError('after() expects two html elements.');
  return a.parentNode.insertBefore(b, a.nextSibling);
};
