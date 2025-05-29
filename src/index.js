/* Group
Daijha Rabalsis
Luis Grande
Mohamed Ait oufquir
David Han
Halil Costa
*/ 

// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {

  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  const retrunValue = await central(id);

  const returnValueDb1 = await db1(id);

  const returnedValueVau = await vault(id);

  console.log(retrunValue)
  console.log(returnValueDb1)
  console.log(returnedValueVau)

  return {
    id: id,
    name: "",
    userName: returnValueDb1.username,
    email: '',
    address: '',
    phone: 0,
    website: '',
    company: {
      name: returnValueDb1.company.name, 
      catchPhrase: returnValueDb1.catchPhrase, 
      bs: returnValueDb1.bs
    }





  }
}

console.log(getUserData(2))
console.log(getUserData(3))
