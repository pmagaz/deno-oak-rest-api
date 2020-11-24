export function to<T>(
  promise: Promise<T>,
): Promise<[Error | undefined, T | undefined]> {
  return promise
    .then<[undefined, T]>((data) => [undefined, data])
    .catch<[Error, undefined]>((err: Error) => [err, undefined]);
}

// export async function to<T, U = Error>(
//   promise: Promise<T>,
// ): Promise<[U, undefined] | [null, T]> {
//   return promise.then<[null, T]>((data) => ([null, data]))
//     .catch<[U, undefined]>((error: U) => [error, undefined]);
// }
