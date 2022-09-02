
let date = new Date;
const $dateInfo = document.querySelector('.dateInfo') as HTMLElement

export const InformationAboutDate = {
  day: date.getDate(),
  mouth: date.getMonth() + 1,
  year: date.getFullYear(),
  hours: date.getHours(),

  showInfoAboutDate: function (): string {
    let dateFormat: string = `${this.day}/${this.mouth}/${this.year} `

    if (this.hours > 5 && this.hours < 12) {
      $dateInfo.textContent = `Bom Dia! Hoje é dia ${dateFormat}`
    }
    else if (this.hours > 13 && this.hours < 17) {
      $dateInfo.textContent = `Boa Tarde! Hoje é dia ${dateFormat}`
    } else {
      $dateInfo.textContent = `Boa Noite! Hoje é dia ${dateFormat}`
    }
    return dateFormat
  }
}
