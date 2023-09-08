let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback = (a: number): number => {
  return 100 + a;
};
//2
let anything: number | string | object = -20;
anything = "Text";
anything = {};

// 3

let some: unknown;
some = "Text";
let str: unknown;
if (typeof some === "string") {
  str = some;
}
// 4
let person: [string, number] = ["Max", 21];
// 5
let newType: string | number;
let myType: "enable" | "disable";
// 6
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
// 7
enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
function isWeekend(day: Day): boolean {
  if (day === Day.Saturday || day === Day.Sunday) {
    return true;
  } else return false;
}
// 8
type Gender = "male" | "female";
let myGender: Gender = "female";
// 9
type Detalis = {
  createAt: Date;
  updateAt: Date;
};

type MyType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: Detalis;
};

const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
// Generic-1
function getPromise<T extends (string | number)[]>() {
  return new Promise<T>((resolve) => {
    resolve(["Text", 50] as T);
  });
}

getPromise<[string, number]>().then((data) => {
  console.log(data);
});
// Generic-2
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type AllTypeTop = Pick<AllType, "name" | "color">;

type AllTypeBottom = Pick<AllType, "position" | "weight">;

function compare(top: AllTypeTop, bottom: AllTypeBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
// Generic-3
function merge<T extends object>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}
// Generic-4
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}
// Generic-5
interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}
// Generic-6
// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: Partial<User>): User {

//     createOrUpdateUser({ email: "user@mail.com", password: "password123" });
// }
// Generic-7
// export enum UserRole {
//   admin = "admin",
//   editor = "editor",
//   guest = "guest",
// }

// type User = UserRole.admin | UserRole.editor | UserRole.guest;
// type UserType = Record<User, string>;

// const RoleDescription: UserType = {
//   admin: "Admin User",
//   editor: "Editor User",
//   guest: "Guest User",
// };
// Generic-8
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;
