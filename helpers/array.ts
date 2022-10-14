export function randomSelect<T>(array: T[], num: number) {
  let newArray = [];
  while(newArray.length < num && array.length > 0) {
    // 配列からランダムな要素を選ぶ
    const rand = Math.floor(Math.random() * array.length)
    // 選んだ要素を別の配列に登録する
    newArray.push(array[rand])
    // もとの配列からは削除する
    array.splice(rand, 1)
  }
  
  return newArray;
}
