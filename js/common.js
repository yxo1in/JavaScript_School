/**
 * 부가세를 계산해서 리턴하는 함수
 * @param {*} productPrice
 * @returns
 */
function taxAmount(productPrice) {
  let tax = 0.1;
  return productPrice * tax;
}

/**
 * 우리나라 5대 부자를 리턴
 * @returns
 */
function getTop5() {
  return ["이재용", 2, 3, 4, "윤기진"];
}

/**
 * 오늘은 기준으로 며칠 전, 후를 구하는 함수
 * @param {*} d
 * @returns
 */
const getIntervalYear = (d) => {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  const res = new Date(currentTime - 1000 * 60 * 60 * 24 * -d);
  return `${String(res.getMonth() + 1).padStart(2, 0)}/${String(res.getDate()).padStart(2, 0)}`;
};

/**
 * 오늘을 기준으로 며칠 전, 후를 일정한 형식으로 구하는 함수
 * @param {*} day
 * @param {*} format
 * @returns
 */
const getIntervalDateFormat = (day, format) => {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  const res = new Date(currentTime - 1000 * 60 * 60 * 24 * -day);
  const formatDate = format.split("-");
  return `${String(res.getFullYear()).slice(-formatDate[0].length)}-${String(res.getMonth() + 1).padStart(2, 0)}-${String(res.getDate()).padStart(2, 0)}`;
};

const getIntervalDateFormat2 = (day, format) => {
  const currentDate = new Date();
  const currentTime = currentDate.getTime();
  const res = new Date(currentTime - 1000 * 60 * 60 * 24 * -day);
  const splitSign = format.replace(/[A-Z]/g, "").charAt(0);
  const formatDate = format.split(splitSign);
  [year, month, date] = formatDate
  const dateFormat = [
    String(res.getFullYear()).slice(-year.length),
    String(res.getMonth() + 1).padStart(2, 0),
    String(res.getDate()).padStart(2, 0)
  ]
  
  return `${dateFormat.join(splitSign)}`;
};
