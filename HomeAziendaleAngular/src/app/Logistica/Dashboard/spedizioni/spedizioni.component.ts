import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/service/database.service';
import { Spedizione } from 'src/app/Spedizione';

@Component({
  selector: 'app-spedizioni',
  templateUrl: './spedizioni.component.html',
  styleUrls: ['./spedizioni.component.css']
})
export class SpedizioniComponent {
  spedizioni:Spedizione[]=[];
  displayedColumns:string[] = ['prodotto','fornitore','filiale','qta'];
  dataSource:MatTableDataSource<Spedizione> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private d:DatabaseService){
    this.d.getSpedizioni().subscribe((sp)=>{this.spedizioni=sp
      this.dataSource = new MatTableDataSource(this.spedizioni)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
