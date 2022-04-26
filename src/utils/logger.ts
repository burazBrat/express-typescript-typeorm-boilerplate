export class Logger {
  public info(log) {
    console.info(log);
  }

  public warn(log) {
    console.warn(log);
  }

  public debug(log) {
    console.debug(log);
  }

  public error(log) {
    console.error(log);
  }
}

export const logger = new Logger();
