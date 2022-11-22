export function throttle(callee: Function, timeout: number) {
  let timer: string | number | NodeJS.Timeout = null
  return function () {
    if (!timer) {
      callee();
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
    }, timeout)
  }
}