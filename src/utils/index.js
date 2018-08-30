export const getTimeInterval = (hisTime, nowTime = new Date()) => {

  /**
   * 计算间隔时长
   */

  let result = null
  const diffValue = +new Date(nowTime) - +new Date(hisTime)
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  // const halfamonth = day * 15
  const month = day * 30
  const year = month * 12

  const [_year, _month, _week, _day, _hour, _min] = [
    diffValue / year,
    diffValue / month,
    diffValue / (7 * day),
    diffValue / day,
    diffValue / hour,
    diffValue / minute
  ]
  if (_year >= 1) result = parseInt(_year, 10) + '年前'
  else if (_month >= 1) result = parseInt(_month, 10) + '月前'
  else if (_week >= 1) result = parseInt(_week, 10) + '周前'
  else if (_day >= 1) result = parseInt(_day, 10) + '天前'
  else if (_hour >= 1) result = parseInt(_hour, 10) + '小时前'
  else if (_min >= 1) result = parseInt(_min, 10) + '分钟前'
  else result = '刚刚'
  return result
}

export const getPagination = (page, total, n = 2) => {

  /**
   * 计算分页
   */

  let arr = [page];
  for (var i = 1; i <= n; i++) {
    if (page - i > 1) {
      arr.splice(0, 0, page - i);
    }
    if (page + i < total) {
      arr.push(page + i);
    }
  }
  if (page - (n + 1) > 1) {
    if (page === total && page - (n + 2) > 1)
      arr.splice(0, 0, page - (n+1));
    arr.splice(0, 0, '...');
  }
  if (page > 1) {
    arr = ['上一页', 1].concat(arr);
  }
  if (page + (n + 1) < total) {
    if (page === 1 && page + (n + 2) < total)
      arr.push(page + n+1);
    arr.push('...');
  }
  if (page < total) {
    arr = arr.concat([total, '下一页']);
  }
  return arr;
}