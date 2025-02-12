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

