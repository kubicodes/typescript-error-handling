import { failure, success } from "../../shared/Either";
import {
  EmailInvalid,
  UserAlreadyExists,
  PasswordDoesntMeetCriteria,
} from "../schema/errors";
import { CreateUserSuccess } from "../schema/success";
import { CreateUserRequest, CreateUserResult, User } from "../schema/types";

export function createUser(request: CreateUserRequest): CreateUserResult {
  const isEmailValid = () => {
    return true;
  };

  if (!isEmailValid) {
    return failure(new EmailInvalid(request.email));
  }

  const userAlreadyExists = () => {
    return false;
  };

  if (userAlreadyExists()) {
    return failure(new UserAlreadyExists(request.email));
  }

  const passwordMatchesCriteria = () => {
    return true;
  };

  if (!passwordMatchesCriteria) {
    return failure(new PasswordDoesntMeetCriteria());
  }

  const isUsernameTaken = () => {
    return false;
  };

  if (isUsernameTaken()) {
    return failure(new UserAlreadyExists(request.email));
  }

  const user: User = {
    id: "1",
    email: "bob@bob.com",
    name: "bob",
  };

  return success(new CreateUserSuccess(user.id));
}
