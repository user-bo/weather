const axios = require('axios')

module.exports = async (location, type) => {
  location = encodeURI(location)
  type = type ? type : 1

  const results = await axios({
    method: 'get',
    url: `http://v.juhe.cn/weather/index?cityname=${location}&dtype=&format=${type}&key=13c84a0898b333ab04744900af913ec2`,
    params: {
      fromat: 'json',
      q:
        `
        select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${location}")
        `
    }
  })
  // weather today -l "厦门" 一定要用双引号
  // console.log('apiData: ', results.data)
  return results.data.result
}