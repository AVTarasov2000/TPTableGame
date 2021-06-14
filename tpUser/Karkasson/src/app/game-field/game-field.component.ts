import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Field} from '../games/Karkasson/field';
import {Card} from '../games/Karkasson/card';
import {log} from 'util';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {

  constructor() { }

  @ViewChild('fieldCanvas', {static: false})
  canvas: ElementRef<HTMLCanvasElement>;
  private fieldCanvasContext: CanvasRenderingContext2D| ImageBitmapRenderingContext| null;



  private cardWidth = 60;
  private cardHeight = 60;
  private borderAlignW = this.cardWidth / 2;
  private borderAlignH = this.cardHeight / 2;
  public screenWidth = window.screen.width;
  public screenHeight = window.screen.height;
  field: Field = new Field();
  tmpCard: any = {svg: '  <style type="text/css">\n' +
      '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
      '  </style>\n' +
      '\n' +
      '  <defs>\n' +
      '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
      '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
      '  </defs>\n' +
      '\n' +
      '  <g transform="translate(30,30)">\n' +
      '    <use xlink:href="#base"/>\n' +
      '  </g>\n',
  rotation: 90};


  cards = [
    {svg: '  <style type="text/css">\n' +
        '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
        '    .rive { stroke-width:10; stroke:#0000ff;               }\n' +
        '  </style>\n' +
        '\n' +
        '  <defs>\n' +
        '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
        '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
        '    <path id="rive_1"  d="M 1,5 A 5,5 0 1 0 0,5 V 30" class="rive"/>\n' +
        '    <g id="tile_a">\n' +
        '      <use xlink:href="#base"/>\n' +
        '      <use xlink:href="#rive_1"/>\n' +
        '    </g>\n' +
        '  </defs>\n' +
        '\n' +
        '  <g transform="translate(30,30)">\n' +
        '    <use xlink:href="#tile_a"/>\n' +
        '  </g>\n' ,
      rotation: 90},
    {svg: '  <style type="text/css">\n' +
        '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
        '  </style>\n' +
        '\n' +
        '  <defs>\n' +
        '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
        '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
        '  </defs>\n' +
        '\n' +
        '  <g transform="translate(30,30)">\n' +
        '    <use xlink:href="#base"/>\n' +
        '  </g>\n',
      rotation: 0},
    {svg: '  <style type="text/css">\n' +
        '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
        '    .rive { stroke-width:10; stroke:#0000ff;               }\n' +
        '  </style>\n' +
        '\n' +
        '  <defs>\n' +
        '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
        '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
        '    <path id="rive_1"  d="M 1,5 A 5,5 0 1 0 0,5 V 30" class="rive"/>\n' +
        '    <g id="tile_a">\n' +
        '      <use xlink:href="#base"/>\n' +
        '      <use xlink:href="#rive_1"/>\n' +
        '    </g>\n' +
        '  </defs>\n' +
        '\n' +
        '  <g transform="translate(30,30)">\n' +
        '    <use xlink:href="#tile_a"/>\n' +
        '  </g>\n',
      rotation: 0},
    {svg: '  <style type="text/css">\n' +
        '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
        '  </style>\n' +
        '\n' +
        '  <defs>\n' +
        '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
        '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
        '  </defs>\n' +
        '\n' +
        '  <g transform="translate(30,30)">\n' +
        '    <use xlink:href="#base"/>\n' +
        '  </g>\n',
      rotation: 270},
    {svg: '  <style type="text/css">\n' +
      '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
      '    .rive { stroke-width:10; stroke:#0000ff;               }\n' +
      '  </style>\n' +
      '\n' +
      '  <defs>\n' +
      '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
      '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
      '    <path id="rive_1"  d="M 1,5 A 5,5 0 1 0 0,5 V 30" class="rive"/>\n' +
      '    <g id="tile_a">\n' +
      '      <use xlink:href="#base"/>\n' +
      '      <use xlink:href="#rive_1"/>\n' +
      '    </g>\n' +
      '  </defs>\n' +
      '\n' +
      '  <g transform="translate(30,30)">\n' +
      '    <use xlink:href="#tile_a"/>\n' +
      '  </g>\n',
      rotation: 270},
    {svg: '  <style type="text/css">\n' +
      '    .base { stroke-width:2;  stroke:#000000; fill:#66cc00; }\n' +
      '  </style>\n' +
      '\n' +
      '  <defs>\n' +
      '    <rect   id="square"  x="-30" y="-30" width="60" height="60"/>\n' +
      '    <use    id="base"    xlink:href="#square" class="base"/>\n' +
      '  </defs>\n' +
      '\n' +
      '  <g transform="translate(30,30)">\n' +
      '    <use xlink:href="#base"/>\n' +
      '  </g>\n',
      rotation: 0},
  ];

  ngOnInit(): void {
    setInterval(this.setupField, 10);
  }


  onClick(event): void{
    const x = Math.floor(event.clientX / this.cardWidth);
    const y = Math.floor(event.clientY / this.cardHeight) - 1;
    if (this.tmpCard) {
      if (this.field.put_card(this.tmpCard, x, y)) {
        if (this.cards.length > 0) {
          this.tmpCard = this.cards.pop();
        } else {
          this.tmpCard = null;
        }
      }
    }
  }

  clickField(event: any): void {
    if (event) {
      if (this.checkRotateClick(event)) {
        this.tmpCard.rotation += 90;
      } else {
        this.onClick(event);
      }
    }
    this.setupField();
  }

  setupField(): void{
    console.log(this.tmpCard.svg);
    this.canvas.nativeElement.width = this.screenWidth;
    this.canvas.nativeElement.height = this.screenHeight;
    this.fieldCanvasContext = this.canvas.nativeElement.getContext('2d');
    // @ts-ignore
    this.fieldCanvasContext.fillStyle = '#b6ff66';
    // @ts-ignore
    this.fieldCanvasContext.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    // @ts-ignore
    // this.fieldCanvasContext.fillStyle = '#66cd00';

    // const x = this.canvas.nativeElement.width / 2 - this.cardWidth / 2;
    // const y = this.canvas.nativeElement.height / 2 - this.cardHeight / 2;
    // const image = new Image();
    // image.src = 'assets/cards/baseCard.svg';

    // стартовая фишка
    // @ts-ignore
    // this.fieldCanvasContext.drawImage(image, x, y, this.cardWidth, this.cardHeight);

    // // @ts-ignore
    // this.fieldCanvasContext.fillStyle = '#e7e7e7';
    // // @ts-ignore
    // this.fieldCanvasContext.fillRect(x + this.cardWidth, y, this.cardWidth, this.cardHeight);
    // // @ts-ignore
    // this.fieldCanvasContext.fillRect(x - this.cardWidth, y, this.cardWidth, this.cardHeight);
    // // @ts-ignore
    // this.fieldCanvasContext.fillRect(x, y + this.cardHeight, this.cardWidth, this.cardHeight);
    // // @ts-ignore
    // this.fieldCanvasContext.fillRect(x, y - this.cardHeight, this.cardWidth, this.cardHeight);
    //
    //
    // // @ts-ignore
    // this.fieldCanvasContext.strokeStyle = '#ffffff';
    // // @ts-ignore
    // this.fieldCanvasContext.strokeRect(x + this.cardWidth, y, this.cardWidth, this.cardHeight);
    // // @ts-ignore
    // this.fieldCanvasContext.strokeRect(x - this.cardWidth, y, this.cardWidth, this.cardHeight);
    // // @ts-ignore
    // this.fieldCanvasContext.strokeRect(x, y + this.cardHeight, this.cardWidth, this.cardHeight);
    // // @ts-ignore
    // this.fieldCanvasContext.strokeRect(x, y - this.cardHeight, this.cardWidth, this.cardHeight);

    if (this.tmpCard) {
      const currentField = new Image();
      currentField.src = this.createImgSrc(this.tmpCard.svg, this.tmpCard.rotation);
      // @ts-ignore
      this.fieldCanvasContext.drawImage(currentField,
        this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW, 10 + this.borderAlignH,
        this.cardWidth, this.cardHeight);
    }
    for (let i = 0; i < this.field.cards.length; i++) {
      const currentField = new Image();
      currentField.src = this.createImgSrc(this.field.cards[i].svg, this.field.cards[i].rotation);
      // @ts-ignore
      this.fieldCanvasContext.drawImage(currentField,
        this.field.cards[i].x * this.cardWidth,
        this.field.cards[i].y * this.cardHeight,
        this.cardWidth, this.cardHeight);
    }



    const man = new Image();
    man.src = 'assets/yellowMan.png';
    // @ts-ignore
    this.fieldCanvasContext.drawImage(man,
      this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW, 10 + this.borderAlignH + this.cardHeight + this.borderAlignH,
      this.cardWidth / 2, this.cardHeight / 2);

    // @ts-ignore
    this.fieldCanvasContext.fillStyle = '#000000';
    // @ts-ignore
    this.fieldCanvasContext.fillText('5', this.canvas.nativeElement.width - this.cardWidth / 2 - this.borderAlignW,
      10 + this.cardHeight + this.borderAlignH * 2);


    const row = new Image();
    row.src = 'assets/rotatingRow.svg';
    // @ts-ignore
    this.fieldCanvasContext.drawImage(row,
      this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW - this.borderAlignW, 10,
      this.borderAlignW, this.borderAlignH);


  }

  createImgSrc(str, rotation): string{
    return 'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
    '<g transform="translate(-30, -30) rotate('+ rotation +' 60 60) translate(30, 30)">\n' +
    str +
    '</g>' +
    '</svg>');
  }

  checkRotateClick(event): boolean{
    return (this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW - this.borderAlignW < event.clientX &&
      event.clientX < this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW - this.borderAlignW + this.cardWidth / 2) ||
      (10 < event.clientY &&
      event.clientY < 10 + this.cardHeight / 2);
  }

}
