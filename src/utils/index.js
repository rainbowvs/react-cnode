/**
 * 计算间隔时长
 * @param {string} startTime 起始时间
 * @param {string} [endTime=new Date()] 结束时间
 * @returns {string} 从起始时间到当前相隔的时间
 */
export const getTimeInterval = (startTime, endTime = new Date()) => {
  let result = null;
  const diffValue = +new Date(endTime) - +new Date(startTime);
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // const halfamonth = day * 15;
  const month = day * 30;
  const year = month * 12;

  const [_year, _month, _week, _day, _hour, _min] = [
    diffValue / year,
    diffValue / month,
    diffValue / (7 * day),
    diffValue / day,
    diffValue / hour,
    diffValue / minute
  ];
  if (_year >= 1) result = `${parseInt(_year, 10)}年前`;
  else if (_month >= 1) result = `${parseInt(_month, 10)}月前`;
  else if (_week >= 1) result = `${parseInt(_week, 10)}周前`;
  else if (_day >= 1) result = `${parseInt(_day, 10)}天前`;
  else if (_hour >= 1) result = `${parseInt(_hour, 10)}小时前`;
  else if (_min >= 1) result = `${parseInt(_min, 10)}分钟前`;
  else result = '刚刚';
  return result;
};

/**
 * 编码
 * @param {object} data 参数对象
 * @returns {string} 编码后的字符串
 */
export const encodeData = data => {
  if (data) {
    const arr = [];
    for (const x in data) {
      if (data[x]) {
        arr.push(`${encodeURIComponent(x)}=${encodeURIComponent(data[x])}`);
      }
    }
    return `?${arr.join('&')}`;
  }
  return '';
};

/**
 * 获取search中的参数值
 * @param {string} search search
 * @param {string} name 参数名
 * @returns {string} 参数值
 */
export const getLocationSearch = (search, name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
  var r = search.substr(1).match(reg);  // 匹配目标参数
  if(r != null)
    return decodeURIComponent(r[2]);
  return null; // 返回参数值
};

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