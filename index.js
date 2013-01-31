
/**
 * insert the given the element `b` after `a`.
 *
 * @param {Element} a
 * @param {Element} b
 * @param {Boolean} before
 * @return {Element} b
 */

module.exports = function(a, b, before){
  if (!a || !b) throw new TypeError('after() expects two html elements.');
  return a.parentNode.insertBefore(b, !before
    ? a.nextSibling
    : a);
};
