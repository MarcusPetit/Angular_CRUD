import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ExemplodetabelaDataSource, ExemplodetabelaItem } from './exemplodetabela-datasource';

@Component({
  selector: 'app-exemplodetabela',
  templateUrl: './exemplodetabela.component.html',
  styleUrls: ['./exemplodetabela.component.css']
})
export class ExemplodetabelaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ExemplodetabelaItem>;
  dataSource: ExemplodetabelaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor() {
    this.dataSource = new ExemplodetabelaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
