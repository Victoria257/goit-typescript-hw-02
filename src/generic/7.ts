/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type User = UserRole.admin | UserRole.editor | UserRole.guest;

const RoleDescription: User = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

export {};
