export class Player {
  constructor({ id, name, score }) {
    this.id = id
    this.name = name;
    this.score = score;
  }

  setScore(score) {
    this.score = score
  }
}
