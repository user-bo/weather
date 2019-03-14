// 1
// module.exports = (args) => {
//   console.log('today is sunny')
// }

const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l
    const weather = getWeather(location) // await getWeather(location)

    spinner.stop()

    weather.then((res) => {
      if (res) {
        console.log(
          `
            当前${location}天气：${res.today.weather}
          `
        )
      }
    })

  } catch(error) {
    spinner.stop()

    console.error(error)
  }
}
