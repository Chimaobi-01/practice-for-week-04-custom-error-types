const ValidationError = require('./validation-error');

// Your code here

class MaximumLengthExceededError extends ValidationError {
  constructor(excessLength = null, ...params) {
    super(...params)

    if (Error.capureStackTrace) {
      Error.capureStackTrace(this, MaximumLengthExceededError)
    }

    this.name = "MaximumLengthExceededError"
    this.message = excessLength !== null ? `Maximum length exceeded by ${excessLength}` : "Maximum length exceeded"
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}