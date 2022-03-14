import { Either } from "../../shared/Either";
import {
  UserAlreadyExists,
  EmailInvalid,
  PasswordDoesntMeetCriteria,
  UsernameTaken,
} from "./errors";
import { CreateUserSuccess } from "./success";

export type CreateUserRequest = {
  email: string;
  password: string;
};

export type CreateUserResult = Either<
  CreateUserSuccess,
  UserAlreadyExists | EmailInvalid | PasswordDoesntMeetCriteria | UsernameTaken
>;

export type User = {
  id: string;
  email: string;
  name: string;
};
