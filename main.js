const fs = require('fs')
//const { Point } = require('./Point')
//const { Human } = require('./classInfo')
//verifier la commande line
if (process.argv.length !== 3) {
  console.log('Error')
  process.exit(1)
}

// verifier si le fichier existe 
if (!fs.existsSync(process.argv[2])) {
  console.log(`ERROR: ${process.argv[2]}, does not exist`)
  process.exit(1)
}

if (process.argv[2] === 'Point.js') {
  const { Point } = require('./Point')
  let p1 = new Point(10, 12)
}
else if (process.argv[2] === 'classInfo.js') {
  const { Human } = require('./classInfo')

} else {
  console.log("Error!! Chek the name of your file")
}