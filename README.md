# Базові типи

Метою цього домашнього завдання є закріплення ваших навичок роботи з базовими типами TypeScript. Ви будете працювати з типами, такими як number, string, boolean, null, undefined, unknown, any, а також кортежами, переліками (enum) та об'єднаннями типів.

В кінці домашнього завдання ви також попрактикуєтеся у створенні свого типу на основі наявних об'єктів. Це допоможе вам краще зрозуміти, як TypeScript може бути використаний для забезпечення типової безпеки ваших даних та підвищення якості вашого коду.

### Завдання 1

Є наступний JavaScript код:

```ts
let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback = (a: number): number => {
  return 100 + a;
};
```

Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

### Завдання 2

JavaScript змінна може зберігати значення будь-якого типу:

```ts
let anything: number | string | object = -20;
anything = "Text";
anything = {};
```

Який тип ви надаєте змінній anything в TypeScript, щоб зберегти її гнучкість?

### Завдання 3

У TypeScript тип unknown дозволяє нам зберігати будь-які значення, але ми можемо привласнити unknown змінну безпосередньо інший змінної, якщо ми впевнені у її типі. У вас є наступний код:

```ts
let some: unknown;
some = "Text";
let str: unknown;
if (typeof some === "string") {
  str = some;
}
```

Що потрібно виправити в цьому коді, щоб він став правильним та безпечним?

### Завдання 4

У вас є наступний JavaScript масив:

```ts
let person: [string, number] = ["Max", 21];
```

Як переписати його в TypeScript, використовуючи концепцію кортежів, щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?

### Завдання 5

Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? string|number І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)? 'enable' | 'disable'

```ts
let newType: string | number;
let myType: "enable" | "disable";
```

### Завдання 6

У вас є такі функції JavaScript:

```ts
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}
```

Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?

### Завдання 7

Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum) і повертає boolean значення, що вказує, чи це день робочий чи вихідний.

```ts
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
```

### Завдання 8

Створіть тип "Gender", використовуючи union type, який може містити значення "male", "female". Створіть змінну myGender цього типу.

```ts
type Gender = "male" | "female";
let myGender: Gender;
```

### Завдання 9

У вас є два об'єкти:

```ts
type Detalis = {
  createAt: string;
  updateAt: string;
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
```

Створіть новий тип даних, який підходить для цих двох об'єктів.

# Generic

Мета цього завдання - допомогти вам зрозуміти та застосувати generics у TypeScript. Ви працюватимете з функціями, що повертають проміси, використовувати вбудований тип Pick, об'єднувати об'єкти за допомогою generics, а також вирішувати проблеми типів у класах.

### Завдання 1

Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.

```ts
function getPromise<T extends (string | number)[]>() {
  return new Promise<T>((resolve) => {
    resolve(["Text", 50] as T);
  });
}

getPromise<[string, number]>().then((data) => {
  console.log(data);
});
```

### Завдання 2

У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType. Функція compare повинна повертати AllType.

```ts
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
```

### Завдання 3

У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

```ts
function merge<T extends object>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}
```

### Завдання 4

Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:

```ts
class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}
```

### Завдання 5

Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.

```ts
interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}
```

### Завдання 6

Ви маєте форму реєстрації користувачів. Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, залишивши ім'я та прізвище без змін.

Виправте тип у аргументі функції так, щоб не було помилок типу.

```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  // Оновлення користувача
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
```

### Завдання 7

У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.

```ts
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type User = UserRole.admin | UserRole.editor | UserRole.guest;
type UserType = Record<User, string>;
// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserType = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
```

### Завдання 8

У вас є тип Form, який містить інформацію про форму, включаючи поле errors. Ви хочете створити новий тип Params, який включає всі поля з Form, крім errors.

```ts
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

// Реалізуйте Params так, щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;
```
