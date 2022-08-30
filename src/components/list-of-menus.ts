export const GenerateMenus = {

  contentList: [
    'Inicio 🡳',
    'Sobre 🡳',
    'Projetos 🡳',
  ],

  generateMenuByString: function () {
    const $menu = document.querySelector('.menu') as HTMLUListElement

    for (let menus of this.contentList) {
      let $listAttributes = document.createElement('li') as HTMLLIElement;
      $listAttributes.className = 'item_menu'
      $listAttributes.textContent = menus
      $menu.appendChild($listAttributes)
      $menu?.insertAdjacentElement('beforeend', $listAttributes)
      $listAttributes.addEventListener('click', () => {
        console.log(menus)
      })
    }
  }
}
