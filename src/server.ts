import { z } from "zod";

// Define the User interface with name and age properties
interface User {
  name: string;
  age: number;
}

// Function that takes a User object and logs its properties
function UserInfo(user: User) {
  console.log(user.age, user.name);
  return user;
}

// Create a User object and pass it to the UserInfo function
const user = UserInfo({ name: "rashmi", age: 32 });
console.log(user);

/*
Define the User interface with additional properties:
- id: unique identifier for the user
- name: user's name
- age: user's age
- email: user's email address
- password: user's password
*/
interface User1 {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;
}

// Create a type that includes only the id, name, and age properties from User
type updatedUserProps = Pick<User1, "id" | "name" | "age">;

// Create a type where all properties of updatedUserProps are optional
type updatedUserOptional = Partial<updatedUserProps>;

/*
Function to update a user with the provided properties:
- updatedUser: an object containing the user's id, name, and age
*/
function updateUser(updatedUser: updatedUserProps) {
  console.log(updatedUser.age, updatedUser.name);
  return updatedUser;
}

// Define a UserReadonly type with readonly properties to prevent modification
type UserReadonly = {
  readonly name: string;
  readonly age: number;
};

// Create a readonly user object
const readonlyUser: UserReadonly = {
  name: "rashmi",
  age: 34,
};

// Define the Config interface with apikey and endpoint properties
interface Config {
  apikey: string;
  endpoint: string;
}

// Create a readonly configuration object
const config: Readonly<Config> = {
  apikey: "some random api key",
  endpoint: "https://somerandomthing.com",
};

//Type infer (most Imp)
const schemaManage = z.string();
type schemaType = z.infer<typeof schemaManage>; // string

// const sdds: schemaType = 12;   // TypeError (it'll start complaining)
const sk: schemaType = "asdf"; // compiles