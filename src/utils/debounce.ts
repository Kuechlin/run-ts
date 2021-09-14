export default function debounce<
  F extends (...args: any) => any,
  A extends Parameters<F>,
  R extends ReturnType<F>
>(
  func: F,
  mil: number,
  immediate?: boolean
): (
  ...args: A
) => R extends Promise<any> ? ReturnType<F> : Promise<ReturnType<F>> {
  let timeout: any;
  return (...args: A): any =>
    new Promise((resolve) => {
      const execute = async () => {
        var result = func(...(args as any));
        if (result instanceof Promise) {
          await result;
        }
        resolve(result);
      };

      if (timeout) clearTimeout(timeout);
      else if (immediate) {
        execute();
      }

      const callback = () => {
        timeout = undefined;

        if (!immediate) execute();
      };

      timeout = setTimeout(callback, mil);
    });
}
