import { User } from "./models/User";
const user = new User({
    name: 'Brett',
    age: 25
});
user.set({name: 'newname', age: 99});
console.log(user.get('name'));
console.log(user.get('age'));