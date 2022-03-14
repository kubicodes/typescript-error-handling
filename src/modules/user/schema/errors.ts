type DomainError = {
  message: string;
};

export class UserAlreadyExists implements DomainError {
  public message: string;

  constructor(username: string) {
    this.message = `User ${username} already exists`;
  }
}

export class EmailInvalid implements DomainError {
  public message: string;

  constructor(email: string) {
    this.message = `The E-Mail ${email} is invalid`;
  }
}

export class PasswordDoesntMeetCriteria implements DomainError {
  public message: string;

  constructor() {
    this.message = "Password must match criteria";
  }
}

export class UsernameTaken implements DomainError {
  public message: string;

  constructor(username: string) {
    this.message = `Username ${username} already taken`;
  }
}
