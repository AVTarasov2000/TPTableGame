import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

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


  private cardWidth = 300 / 4;
  private cardHeight = 300 / 4;
  private borderAlignW = this.cardWidth / 2;
  private borderAlignH = this.cardHeight / 2;
  public screenWidth = window.screen.width;
  public screenHeight = window.screen.height;

  ngOnInit(): void {

  }

  setupField(): void{
    this.canvas.nativeElement.width = this.screenWidth;
    this.canvas.nativeElement.height = this.screenHeight;
    this.fieldCanvasContext = this.canvas.nativeElement.getContext('2d');
    // @ts-ignore
    this.fieldCanvasContext.fillStyle = '#b6ff66';
    // @ts-ignore
    this.fieldCanvasContext.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    // @ts-ignore
    this.fieldCanvasContext.fillStyle = '#66cd00';

    const x = this.canvas.nativeElement.width / 2 - this.cardWidth / 2;
    const y = this.canvas.nativeElement.height / 2 - this.cardHeight / 2;
    const image = new Image();
    image.src = 'assets/cards/baseCard.svg';

    // стартовая фишка
    // @ts-ignore
    this.fieldCanvasContext.drawImage(image, x, y, this.cardWidth, this.cardHeight);

    // @ts-ignore
    this.fieldCanvasContext.fillStyle = '#e7e7e7';
    // @ts-ignore
    this.fieldCanvasContext.fillRect(x + this.cardWidth, y, this.cardWidth, this.cardHeight);
    // @ts-ignore
    this.fieldCanvasContext.fillRect(x - this.cardWidth, y, this.cardWidth, this.cardHeight);
    // @ts-ignore
    this.fieldCanvasContext.fillRect(x, y + this.cardHeight, this.cardWidth, this.cardHeight);
    // @ts-ignore
    this.fieldCanvasContext.fillRect(x, y - this.cardHeight, this.cardWidth, this.cardHeight);


    // @ts-ignore
    this.fieldCanvasContext.strokeStyle = '#ffffff';
    // @ts-ignore
    this.fieldCanvasContext.strokeRect(x + this.cardWidth, y, this.cardWidth, this.cardHeight);
    // @ts-ignore
    this.fieldCanvasContext.strokeRect(x - this.cardWidth, y, this.cardWidth, this.cardHeight);
    // @ts-ignore
    this.fieldCanvasContext.strokeRect(x, y + this.cardHeight, this.cardWidth, this.cardHeight);
    // @ts-ignore
    this.fieldCanvasContext.strokeRect(x, y - this.cardHeight, this.cardWidth, this.cardHeight);

    const currentField = new Image();
    currentField.src = 'assets/cards/riverStart.svg';
    // @ts-ignore
    this.fieldCanvasContext.drawImage(currentField,
      this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW, 10,
      this.cardWidth, this.cardHeight);

    const man = new Image();
    man.src = 'assets/yellowMan.png';
    // @ts-ignore
    this.fieldCanvasContext.drawImage(man,
      this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW, 10 + this.cardHeight + this.borderAlignH,
      this.cardWidth / 2, this.cardHeight / 2);

    // @ts-ignore
    this.fieldCanvasContext.fillStyle = '#000000';
    // @ts-ignore
    this.fieldCanvasContext.fillText('5', this.canvas.nativeElement.width - this.cardWidth / 2 - this.borderAlignW,
      10 + this.cardHeight + this.borderAlignH);


    const row = new Image();
    row.src = 'assets/cards/rotatingRow.svg';
    // @ts-ignore
    this.fieldCanvasContext.drawImage(row,
      this.canvas.nativeElement.width - this.cardWidth - this.borderAlignW - this.borderAlignW, 10,
      this.borderAlignW, this.borderAlignH);


  }

}
