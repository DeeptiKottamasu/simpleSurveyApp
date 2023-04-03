const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_MINLENGTH = 'MINLENGTH';
const VALIDATOR_TYPE_MAXLENGTH = 'MAXLENGTH';
const VALIDATOR_TYPE_MIN = 'MIN';
const VALIDATOR_TYPE_MAX = 'MAX';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';
const VALIDATOR_TYPE_FILE = 'FILE';

export function VALIDATOR_REQUIRE(){ return ({type: VALIDATOR_TYPE_REQUIRE}) };
export const VALIDATOR_FILE = { type: VALIDATOR_TYPE_FILE };
export function VALIDATOR_MINLENGTH(val){
  return({  type: VALIDATOR_TYPE_MINLENGTH,
    val: val});
};
export function VALIDATOR_MAXLENGTH(val){
  return({
    type: VALIDATOR_TYPE_MAXLENGTH,
    val: val
  });
};
export function VALIDATOR_MIN(val){ return ({type: VALIDATOR_TYPE_MIN, val: val}) };
export function VALIDATOR_MAX(val){ return ({type: VALIDATOR_TYPE_MAX, val: val}) };
export function VALIDATOR_EMAIL(){ return ({type: VALIDATOR_TYPE_EMAIL}) };

export const validate = (value, validators) => {
  let isValid = true;
  // console.log('Outside conditions: ' + value + value.trim().length);
  for (const validator of validators) {
    // console.log('Inside: ' + validator + typeof validator + validator.type );
    if (validator.type === VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val;
    }
    if (validator.type === VALIDATOR_TYPE_EMAIL) {
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
  }
  return isValid;
};