//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if(!message.trim()) return 'Fine. Be that way!'
  const isCaps = /[A-Z]/.test(message.trim()) && !/[a-z]/.test(message.trim())
  const isQuestion = /\?$/.test(message.trim());

  if(isQuestion && isCaps) return "Calm down, I know what I'm doing!"
  if(!isQuestion && isCaps) return "Whoa, chill out!"
  if(isQuestion && isCaps) return  "Sure."

  return 'Whatever.'
}
