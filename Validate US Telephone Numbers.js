// Validate US Telephone Numbers.js
function telephoneCheck(str) {
  return /(^\d{3}|^1|^\(\d{3}\))([- ]?)(\d{3}|\(\d{3}\))([- ]?)(\d{4}|\d{3}([- ])(\d{4}))$/gm.test(str);
}
function telephoneCheck(str) {
  return /^(1\s?)?(\(\d{3}\)|\d{3})[ -]?\d{3}[ -]?\d{4}$/gm.test(str);
}

// True
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 1 (555) 555-5555
// 5555555555
// 1 555 555 5555
// 1(555)555-5555
// 1 456 789 4444
//
// False
// "123**&!!asdf#"
// 55555555
// (6505552368)
// 2 (757) 622-7382
// 0 (757) 622-7382
// -1 (757) 622-7382
// 2 757 622-7382
// 10 (757) 622-7382
// 27576227382
// (275)76227382
// 2(757)6227382
// 2(757)622-7382
// 555)-555-5555
// (555-555-5555

// 1st Capturing group (^\d{3}|^1|^\(\d{3}\))
// 1st Alternative: ^\d{3}
// ^ assert position at start of a line
// \d{3} match a digit [0-9]
// Quantifier: {3} Exactly 3 times
// 2nd Alternative: ^1
// ^ assert position at start of a line
// 1 matches the character 1 literally
// 3rd Alternative: ^\(\d{3}\)
// ^ assert position at start of a line
// \( matches the character ( literally
// \d{3} match a digit [0-9]
// Quantifier: {3} Exactly 3 times
// \) matches the character ) literally
// 2nd Capturing group ([- ]?)
// [- ]? match a single character present in the list below
// Quantifier: ? Between zero and one time, as many times as possible, giving back as needed [greedy]
// -  a single character in the list -  literally
// 3rd Capturing group (\d{3}|\(\d{3}\))
// 1st Alternative: \d{3}
// \d{3} match a digit [0-9]
// Quantifier: {3} Exactly 3 times
// 2nd Alternative: \(\d{3}\)
// \( matches the character ( literally
// \d{3} match a digit [0-9]
// Quantifier: {3} Exactly 3 times
// \) matches the character ) literally
// 4th Capturing group ([- ]?)
// [- ]? match a single character present in the list below
// Quantifier: ? Between zero and one time, as many times as possible, giving back as needed [greedy]
// -  a single character in the list -  literally
// 5th Capturing group (\d{4}|\d{3}([- ])(\d{4}))
// 1st Alternative: \d{4}
// \d{4} match a digit [0-9]
// Quantifier: {4} Exactly 4 times
// 2nd Alternative: \d{3}([- ])(\d{4})
// \d{3} match a digit [0-9]
// Quantifier: {3} Exactly 3 times
// 6th Capturing group ([- ])
// [- ] match a single character present in the list below
// -  a single character in the list -  literally
// 7th Capturing group (\d{4})
// \d{4} match a digit [0-9]
// Quantifier: {4} Exactly 4 times
// $ assert position at end of a line
// g modifier: global. All matches (don't return on first match)
// m modifier: multi-line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
