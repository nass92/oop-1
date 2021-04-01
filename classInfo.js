const chalk = require('chalk')
class Human {
  constructor(firstName, lastName, age, language) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.language = language
  }
  printInfo() {
    console.log(chalk.red(`first name: ${this.firstName}`))
    console.log(chalk.green(`lastName: ${this.lastName}`))
    console.log(chalk.yellow(`age: ${this.age}`))
    console.log(chalk.blue(`Language: ${this.language}`))
  }

  canVote() {
    if (this.age > 18) {
      console.log(chalk.green(`${this.firstName} can vote`))
    } else {
      console.log(chalk.red(`${this.firstName} can not vote`))
    }
  }

  mostSkilledDev(perso1) {
    if (this.language.length > perso1.language.length) {
      console.log(`${this.firstName} know more language than ${perso1.firstName} `)
    } else if (perso1.language.length > this.language.length) {
      console.log(`${perso1.firstName} know more language than ${this.firstName} `)
    } else {
      console.log(`${this.firstName} and ${perso1.firstName} know the same number of language`)
    }
  }
}

const alice = new Human('Alice', 'Lindell', 28, ['Javascript', 'C', 'C++'])
const bob = new Human('Bob', 'Lemon', 30, ['HTML/CSS', 'Javascript', 'C'])
const charlie = new Human('Charlie', 'Charlot', 8, ['Shell'])




alice.printInfo()
alice.canVote()
bob.printInfo()
bob.canVote()
charlie.printInfo()
charlie.canVote()
alice.mostSkilledDev(bob)
alice.mostSkilledDev(charlie)
bob.mostSkilledDev(charlie)

exports.Human = Human