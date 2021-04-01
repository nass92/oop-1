// déclaration des objet literal de chaque personne contenant leurs informations
const alice = {
  firstName: 'Alice',
  lastName: 'Lidell',
  age: 28,
  language: ['Javascript', 'C', 'C++'],
}
const bob = {
  firstName: 'Bob',
  lastName: 'Lemon',
  age: 30,
  language: ['HTML/CSS', 'Javascript', 'C'],
}

const charlie = {
  firstName: 'Charlie',
  lastName: 'Charlot',
  age: 8,
  language: ['Shell'],
}

// fonction 'printInfo' qui affiche les infomrations de chaque personne
const printInfo = (person) => {
  console.log(`first name: ${person.firstName}`)
  console.log(`lastName:${person.lastName}`)
  console.log(`age: ${person.age}`)
  console.log(`Language: ${person.language}`)
}
printInfo(alice)
printInfo(bob)
printInfo(charlie)

// fonction qui check en fonction de l'age si la personne peut voter

const canVote = (person) => {
  if (person.age > 18) {
    console.log(`${person.firstName} can vote`)
  } else {
    console.log(`${person.firstName} can not vote`)
  }
}

canVote(alice)
canVote(bob)
canVote(charlie)

//fonction qui check qui connait le plus de language de prog

const mostSkilledDev = (perso1, perso2) => {
  if (perso1.language.length > perso2.language.length) {
    console.log(`${perso1.firstName} know more language than ${perso2.firstName} `)
  } else if (perso2.language.length > perso1.language.length) {
    console.log(`${perso2.firstName} know more language than ${perso1.firstName} `)
  } else {
    console.log(`${perso1.firstName} and ${perso2.firstName} know the same number of language`)
  }
}

mostSkilledDev(alice, bob)
mostSkilledDev(alice, charlie)
mostSkilledDev(bob, charlie)

