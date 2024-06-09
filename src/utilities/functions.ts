export const wait = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const processCbAfterDelay = (ms: number, cb: Function) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cb), ms);
  });
};

export const throwError = (msg: string = "⚠️ mimicing an error trigger") => {
  throw new Error(msg);
};
