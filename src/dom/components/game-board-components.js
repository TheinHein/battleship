import alphabets from "../../helpers/alphabets";

const defaultClassName = "board";

export default class GameBoardComponent {
  constructor(board, type, className = defaultClassName) {
    this.board = board;
    this.type = type;
    this.className = className;
    this.fragment = document.createDocumentFragment();
    this.component = document.createElement("table");
    this.component.className = this.className;
    this.xAxisLabelHead = document.createElement("thead");
    this.component.appendChild(this.xAxisLabelHead);
    this.xAxisLabelRow = document.createElement("tr");
    this.xAxisLabelHead.appendChild(this.xAxisLabelRow);
    this.cornerTile = document.createElement("th");
    this.xAxisLabelRow.appendChild(this.cornerTile);
    for (let i = 0; i < this.board.length; i += 1) {
      this.xAxisLabelTile = document.createElement("th");
      this.xAxisLabelTile.textContent = i + 1;
      this.xAxisLabelRow.appendChild(this.xAxisLabelTile);
    }
    this.body = document.createElement("tbody");
    this.component.appendChild(this.body);
    for (let i = 0; i < this.board.length; i += 1) {
      this.row = document.createElement("tr");
      this.body.appendChild(this.row);
      this.yAxisLabel = document.createElement("th");
      this.yAxisLabel.textContent = alphabets[i];
      this.row.appendChild(this.yAxisLabel);
      for (let j = 0; j < this.board.length; j += 1) {
        this.tile = document.createElement("td");
        this.tile.dataset.cord = this.board[i][j].cord;

        if (this.board[i][j].ship && this.type !== "clickable") {
          const { loc } = this.board[i][j].ship;
          const hor = loc.every((pos) => pos[0] === loc[0][0]);
          for (let k = 0; k < loc.length; k += 1) {
            if (hor) {
              this.tile.classList.add("body-hor");
              if (loc[0] === this.tile.dataset.cord) {
                this.tile.classList.add("head-hor");
              } else if (loc[loc.length - 1] === this.tile.dataset.cord) {
                this.tile.classList.add("tail-hor");
              }
            } else {
              this.tile.classList.add("body-ver");
              if (loc[0] === this.tile.dataset.cord) {
                this.tile.classList.add("head-ver");
              } else if (loc[loc.length - 1] === this.tile.dataset.cord) {
                this.tile.classList.add("tail-ver");
              }
            }
          }
        }
        if (this.board[i][j].isHit) {
          this.tile.className = "";
          this.tile.classList.add("hit");
        } else if (this.board[i][j].isMissed) {
          this.tile.className = "";
          this.tile.classList.add("missed");
        }

        this.row.appendChild(this.tile);
      }
    }
    this.fragment.appendChild(this.component);
  }
}
