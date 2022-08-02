//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COMMANDS = ["wink","double blink","close your eyes","jump"];


export const commands = (num) => {
  const array = COMMANDS.filter((_,i)=>(1<<i) & num);
  return num > 16 ? array.reverse() : array;
};
