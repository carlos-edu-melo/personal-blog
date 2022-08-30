export class BlogContentModel {
  title: string;
  description: string;
  date: string;
  content?: string;

  constructor(title: string, description: string, date: string, content?: string) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.content = content;
  }
}