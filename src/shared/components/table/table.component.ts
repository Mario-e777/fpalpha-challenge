import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "sw-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class Table {
  @Input() headers: Array<string> = [];
  @Input() hasNextPage: boolean = false;
  @Input() hasPrevPage: boolean = false;
  @Output() dataHandler = new EventEmitter<number>();

  currentPage: number = 1;

  handlePrevPage() {
    this.currentPage--;
    this.dataHandler.emit(this.currentPage);
  }

  handleNextPage() {
    this.currentPage++;
    this.dataHandler.emit(this.currentPage);
  }
}
