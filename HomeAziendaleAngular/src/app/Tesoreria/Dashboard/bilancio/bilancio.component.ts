import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Filiale } from 'src/app/Filiale';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-bilancio',
  templateUrl: './bilancio.component.html',
  styleUrls: ['./bilancio.component.css']
})
export class BilancioComponent {
  filiali:Filiale[]=[];
  displayedColumns: string[] = ['id', 'citta','bilancio'];
  dataSource: MatTableDataSource<Filiale>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;


  constructor(private s:DatabaseService){
    this.s.getFiliali().subscribe((fi)=>{
      this.filiali=fi
      this.dataSource = new MatTableDataSource(this.filiali);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  ngOnInit(): void {}

  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

