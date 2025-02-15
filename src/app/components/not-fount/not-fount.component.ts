import { Component } from '@angular/core';

@Component({
  selector: 'app-not-fount',
  standalone: true,
  imports: [],
  template: `
    <div id="main">
      <div class="fof">
        <h3>No se encontró cliente</h3>
      </div>
    </div>
  `,
  styles: `
  *{
    transition: all 0.6s;
  }

  html {
      height: 100%;
  }

  body{
      font-family: 'Lato', sans-serif;
      color: #888;
      margin: 0;
  }

  #main{
      display: table;
      height: 40vh;
      text-align: center;
  }

  .fof{
      display: table-cell;
      vertical-align: middle;
  }

  .fof h3{
      font-size: 50px;
      display: inline-block;
      padding-right: 12px;
      animation: type .5s alternate infinite;
  }

  @keyframes type{
      from{box-shadow: inset -3px 0px 0px #888;}
      to{box-shadow: inset -3px 0px 0px transparent;}
  }
    `,
})
export class NotFountComponent {}
