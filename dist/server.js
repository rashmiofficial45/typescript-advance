"use strict";
function UserInfo(user) {
    console.log(user.age, user.name);
    return user;
}
const user = UserInfo({ name: "rashmi", age: 32 });
console.log(user);
