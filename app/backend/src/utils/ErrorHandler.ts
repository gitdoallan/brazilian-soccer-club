export class ErrorHandler extends Error {
  public status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
export default ErrorHandler;
