
let timerNow = document.querySelector('.timerNow') as HTMLParagraphElement
export const InformationAboutTime = {
  showTimer: function (date = new Date): string {
    let minutes: any = date.getMinutes()
    let seconds: any = date.getSeconds()
    minutes < 10 ? minutes = '0' + minutes : minutes
    seconds < 10 ? seconds = '0' + seconds : seconds

    return timerNow.textContent = ` ${date.getHours()}:${minutes}:${seconds} `
  }
}
setInterval(InformationAboutTime.showTimer, 1000);