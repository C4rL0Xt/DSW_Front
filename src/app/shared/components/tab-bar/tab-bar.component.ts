import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent {

  @Input() tabs: { label: string, route: string }[] = [];
  @Output() tabSelected = new EventEmitter<string>();

  activeTab: { label: string, route: string } | null = null;

  selectTab(tab: { label: string, route: string }): void {
    this.activeTab = tab;
    this.tabSelected.emit(tab.route);
  }
  
}
