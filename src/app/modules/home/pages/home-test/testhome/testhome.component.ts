import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testhome',
  templateUrl: './testhome.component.html',
  styleUrl: './testhome.component.css'
})
export class TesthomeComponent implements OnInit {

  ngOnInit(): void {
    console.log(btoa('client:secret'))
  }

}
