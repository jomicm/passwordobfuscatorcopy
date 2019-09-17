const args = process.argv.slice(2);
const obfuscatePassword = function(args) {
  const dic = {a: '4', e: '3', o: '0', l: '1'};
  let obfuscated = '';
  for (let letter of args[0]) {
    obfuscated += dic[letter] || letter;
  }
  return obfuscated;
};
if (args.length) {
  console.log(obfuscatePassword(args));
}