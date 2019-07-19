/**
 * 延时
 * @param {number} time 延时时间，默认为0
 */
export default function sleep(time: number = 0) {
  return new Promise((r: any) => {
    setTimeout(() => {
      r()
    }, time)
  })
}
