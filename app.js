const _ = require('loadash')


const items = [[2,[2[4[5]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)