import { Component, OnInit } from '@angular/core';
import {CrossPageInformation} from '../services/crossPageInformation';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  constructor(public data: CrossPageInformation) { }

  ngOnInit(): void {
  }

}
