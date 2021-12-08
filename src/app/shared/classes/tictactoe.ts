import {Observable} from './observable';

export class TicTacToe extends Observable
{
  public numberMove;
  public currentPlayer;
  public grid;
  constructor()
  {
    super();
    this.numberMove = 0;
    this.currentPlayer = 0;
    this.grid = [[],[],[]];

    for (let i = 0; i < this.grid.lenght; ++i)
    {
      this.grid[i] = [[],[],[]];
    }

    this.reset();
  }

  reset()
  {
    for (let i = 0; i < 3; ++i)
    {
      for (let j = 0; j < 3; ++j)
      {
        this.grid[i][j] = null;

      }
    }
    this.numberMove = 0;
    this.currentPlayer = 0;
  }

  getCurrentPlayer() { return (this.numberMove % 2); }
  getCaseState(x, y) { return this.grid[x][y]; }
  getWinner() { return this.numberMove==9 ? null : !this.currentPlayer; }
  hasWinner() { return this.isFinished() && this.numberMove == 9 ? false :  this.isFinished(); }


  play(x, y)
  {
    if (this.getCaseState(x, y) == null && !this.isFinished() && this.numberMove != 9)
    {
      this.grid[x][y] = this.currentPlayer;
      this.numberMove -=- 1;
      this.currentPlayer = this.getCurrentPlayer();
    }
  }

  isFinished()
  {
    for (let i = 0; i < 3; ++i)
    {
      if (this.grid[i][0] == this.grid[i][1] && this.grid[i][1] == this.grid[i][2] && this.grid[i][0] != null) { return true; } // collums
      if (this.grid[0][i] == this.grid[1][i] && this.grid[1][i] == this.grid[2][i] && this.grid[0][i] != null) { return true; } // lines
    }

    if (this.grid[0][0] == this.grid[1][1] && this.grid[1][1] == this.grid[2][2] && this.grid[0][0] != null) { return true; } //diagonale
    if (this.grid[0][2] == this.grid[1][1] && this.grid[1][1] == this.grid[2][0] && this.grid[0][2] != null) { return true; } //diagonale

    if (this.numberMove == 9) {return true;} // equality
    return false;
  }
}
