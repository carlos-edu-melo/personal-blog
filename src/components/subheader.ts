
let date = new Date;
const $subHeader = document.querySelector('.subHeader') as HTMLDivElement;
const dateInfo = document.createElement('h1') as HTMLElement

export const DateNow = {
  day: date.getUTCDate(),
  mouth: date.getUTCMonth() + 1,
  year: date.getUTCFullYear(),
  hours: date.getHours(),

  showInfoAboutDate: function () {
    dateInfo.className = 'dateInfo';
    $subHeader.appendChild(dateInfo)

    let dateFormat: string = `${this.day}/${this.mouth}/${this.year} `

    if (this.hours >= 5 && this.hours <= 12) {
      dateInfo.textContent = `Bom Dia! Hoje é dia ${dateFormat}`
    }
    if (this.hours >= 13 && this.hours <= 17) {
      dateInfo.textContent = `Boa Tarde! Hoje é dia ${dateFormat}`
    } else {
      dateInfo.textContent = `Boa Noite! Hoje é dia ${dateFormat}`
    }
  }
}

let timerNow = document.createElement('p') as HTMLParagraphElement
timerNow.className = 'timerNow'
const TimeNow = {
  showTimer: function (date = new Date): HTMLParagraphElement {
    timerNow.textContent = ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
    $subHeader.appendChild(timerNow)
    return timerNow
  }
}
setInterval(TimeNow.showTimer, 1000);