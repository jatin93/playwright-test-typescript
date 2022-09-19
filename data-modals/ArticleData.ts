export class ArticleData {
  tittle: string;
  subject: string;
  text: string;
  tags: string;
  constructor(data: ArticleData) {
    this.tittle = data.tittle;
    this.subject = data.subject;
    this.text = data.text;
    this.tags = data.tags;
  }
}
