export function convert(str) {
    var eachStr = str.split(",");
    var total = [];

    for (let i = 0; i < eachStr.length; i++) {
      total.push({
        name: eachStr[i],
      });
    }

    return total;
  }