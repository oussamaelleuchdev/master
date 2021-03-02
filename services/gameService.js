export default {

  getTimeMilliSecsClicked(clickedTime, blockAppearTime) {
    /** get score in milliseconds **/
    const dateDifference = new Date(clickedTime - blockAppearTime)
    return dateDifference.getMilliseconds() + dateDifference.getSeconds() * 1000 + dateDifference.getMinutes() * 60 * 1000
  },

  getTimeDifference(score) {
    /** get time diff like 2 mins, 22 secs, 103 ms **/
    const minutes = parseInt( (score / (60 * 1000)))
    const seconds = parseInt(((score - 60 * 1000 * minutes) / 1000))
    const milliseconds = score - 60 * 1000 * minutes - seconds * 1000

    let result = ''

    if (minutes > 0) {
      result += minutes + ' min' + (minutes > 1 ? 's' : '')
    }

    if (seconds > 0) {
      result += (minutes > 0 ? ', ' : '') + seconds + ' sec' + (seconds > 1 ? 's' : '')
    }

    if (milliseconds > 0) {
      result += (seconds > 0 || minutes > 0 ? ', ' : '') + milliseconds + ' ms'
    }

    return result;

  }

}
