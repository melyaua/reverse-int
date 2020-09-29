module.exports = function reverse (n) {
    if (n > 0) {
        let str = String(n)
        let newArr = str.split('').reverse().join('');
        return Number(newArr)
      }
        let str = String(n).substring(1)
        let newArr = str.split('').reverse().join('');
        return Number(newArr)
}
