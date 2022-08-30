import { BlogContentModel } from "./blogCardModel";

export class BlogContentController {

  public showListOfBlogContent = (): BlogContentModel[] => {
    let list: BlogContentModel[] = [
      new BlogContentModel('Title test', 'Loren upsu Loren upsu', '29/08/22', 'Loren upsu Loren upsuLoren upsu Loren upsuLoren upsu Loren upsu'),
      new BlogContentModel('Title test', 'Loren upsu Loren upsu', '29/08/22', 'Loren upsu Loren upsuLoren upsu Loren upsuLoren upsu Loren upsu')
    ]

    return list
  }
}