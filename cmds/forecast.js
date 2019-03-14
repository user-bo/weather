// 1
// module.exports = (args) => {
//   console.log('tomorrow is rainy')
// }

const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = async (args) => {
  const spinner = ora().start()

  try {
    const location = args.location || args.l
    const weather = getWeather(location, 2)

    spinner.stop()

    if(!weather) {
      return
    }

    weather.then((res) => {
      
      res.future.forEach((dayWeather) => {
        const {
          temperature,
          weather,
          wind,
          date,
          week
        } = dayWeather

        console.log(`\t${date} - ${week} - ${weather} - ${temperature} - ${wind} `)
      })
      
    })
   
  } catch (err) {
    spinner.stop()
    console.error(err)
  }
}