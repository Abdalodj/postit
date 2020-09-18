import {Dates} from './dates';

export class Post {

  constructor(public id: number,
              public title: string,
              public content: string,
              public creationDate: Dates,
              public love: number) {}

}
