import { list } from "./list-of-cards";

const $containerCardContent = document.querySelector('.containerCardContent') as HTMLDivElement

export class BlogContentController {

  static showListOfBlogContent = () => {

    for (let card of list) {
      const cardContent = document.createElement('div') as HTMLDivElement;
      cardContent.className = 'cardContent'
      const title = document.createElement('h3') as HTMLElement;
      const description = document.createElement('p') as HTMLParagraphElement
      const date = document.createElement('i') as HTMLElement
      const content = document.createElement('p') as HTMLParagraphElement

      title.textContent = card.title
      description.textContent = card.description
      date.textContent = card.date
      content.textContent = card.content || 'null'

      cardContent.appendChild(title)
      cardContent.appendChild(description)
      cardContent.appendChild(content)
      cardContent.appendChild(date)

      $containerCardContent.appendChild(cardContent)

    }
  }
}