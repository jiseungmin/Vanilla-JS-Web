function User(name,age, ...skills){
  this.name = name
  this.age = age
  this.skills = skills
}

const user1 = new User("mike",18,"react","css")
const user2 = new User("taken",19,"english")
const user3 = new User("vok",20,"JS","reactnative")

console.log(user1)
console.log(user2)
console.log(user3)