//Note: Common use of Interface
interface User{
    name: string,
    age :number
}

function UserInfo (user:User){
    console.log(user.age, user.name);
    return user
}

const user = UserInfo({name:"rashmi",age:32})
console.log(user);

//Pick Property

interface User {
  id:string;
  name: string;
  age: number;
  email:string;
  password:string;
}

type updatedUserProps = Pick<User, "id" | "name" | "age">

function updateUser(updatedUser: updatedUserProps) {
  console.log(user.age, user.name);
  return user;
}

