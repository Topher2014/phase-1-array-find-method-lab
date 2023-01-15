// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

// console.log(record.find(superbowlWin))
 record.find(superbowlWin)

function superbowlWin(record){
    // console.log(record.result === 'W')
    // console.log(record.year)
    if (record.result === 'W'){
        const variable = record.year
        // console.log(variable)
        return variable
    }
}