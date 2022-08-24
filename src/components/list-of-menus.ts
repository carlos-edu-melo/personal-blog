export const GenerateMenus = {

  contentList: [
    'Inicio',
    'Sobre',
    'Projetos',
  ],
  //Automatização da criação de menus baseado somente no array acima.
  generateMenuByString: function () {
    const $menu = document.querySelector('.menu') as HTMLUListElement

    for (let indexOfMenuList: number = 0; indexOfMenuList < this.contentList.length; indexOfMenuList++) {
      let $listAttributes = document.createElement('li') as HTMLLIElement;
      $listAttributes.className = 'item_menu'
      $listAttributes.textContent = this.contentList[indexOfMenuList]
      $menu.appendChild($listAttributes)
      $menu?.insertAdjacentElement('beforeend', $listAttributes)
      $listAttributes.addEventListener('click', () => {
        console.log(this.contentList[indexOfMenuList])
      })
    }
  }
}
