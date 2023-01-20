import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Magazzino } from 'src/app/Magazzino';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent{
  magazzino:Magazzino[]=[];
  displayedColumns:string[] = ['id_prodotto','id_fornitore','qta'];
  dataSource:MatTableDataSource<Magazzino> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private d:DatabaseService){
    this.d.getMagazzino().subscribe((ma)=>{this.magazzino=ma
      this.dataSource = new MatTableDataSource(this.magazzino)
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
