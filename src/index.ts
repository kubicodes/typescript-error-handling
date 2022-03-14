import { createUser } from "./modules/user/services/createUser";

const userResult = createUser({
  email: "bob@bob.com",
  password: "testpassword",
});

if (userResult.isSuccess()) {
  const createdUserId = userResult.value.id;

  console.log(createdUserId);
}

if (userResult.isFailure()) {
  let error = userResult.value;

  console.log({ message: error.message });
}
