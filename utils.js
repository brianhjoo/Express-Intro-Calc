const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {  // "2,1,3"
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  const nums = strNums.split(',').map(function(val) {
    return parseInt(val);
  });

  return nums;
}


module.exports = { convertStrNums };