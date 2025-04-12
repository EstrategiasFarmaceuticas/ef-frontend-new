export class AuthModel {
  email: string;
  token: string;
  expiresIn: number;

  constructor(email: string, token: string, expiresIn: number = 3600) {
    this.email = email;
    this.token = token;
    this.expiresIn = expiresIn;
  }

  expiresInToDate(): Date {
    const date = new Date(this.expiresIn);
    return date;
  }
}
