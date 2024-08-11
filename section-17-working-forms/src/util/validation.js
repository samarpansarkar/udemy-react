// export function isEmail(value) {
//   return value.includes('@');
// }

// export function isNotEmpty(value) {
//   return value.trim() !== '';
// }

// export function hasMinLength(value, minLength) {
//   return value && value.length >= minLength;
// }

// export function isEqualsToOtherValue(value, otherValue) {
//   return value === otherValue;
// }

export function isEmail(value) {
  return value && value.includes('@');
}

export function isNotEmpty(value) {
  return value && value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value && value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
