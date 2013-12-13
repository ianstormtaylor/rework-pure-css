
var prefixes = require('autoprefixer')().rework;
var vars = require('rework-vars')();
var variant = require('rework-font-variant');


/**
 * Expose `plugin`.
 */

module.exports = plugin;


/**
 * Apply all of our pure-CSS plugins to a `rework` instance.
 *
 * @param {Object} stylesheet
 * @param {Object} rework
 */

function plugin (stylesheet, rework) {
  rework
    .use(pseudos)
    .use(vars)
    .use(variant)
    .use(prefixes);
}