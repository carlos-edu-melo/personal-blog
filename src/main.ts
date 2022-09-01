import './style.css'
import { GenerateMenus } from './components/list-of-menus'
import { InformationAboutDate } from './components/date'
import { InformationAboutTime } from './components/time'
import { BlogContentController } from './components/blogCard/blogCardController'

GenerateMenus.generateMenuByString()
InformationAboutDate.showInfoAboutDate()
InformationAboutTime.showTimer()
BlogContentController.showListOfBlogContent()


