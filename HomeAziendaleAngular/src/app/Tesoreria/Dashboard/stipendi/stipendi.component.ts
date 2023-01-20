import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
import { Utente } from 'src/app/Utente';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-stipendi',
  templateUrl: './stipendi.component.html',
  styleUrls: ['./stipendi.component.css']
})
export class StipendiComponent {
  utenti:Utente[]=[];
  displayedColumns: string[] = ['nome', 'cognome','stipendio'];
  dataSource: MatTableDataSource<Utente>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;


  constructor(private s:DatabaseService){
    this.s.getUtenti().subscribe((ut)=>{this.utenti=ut
      this.dataSource = new MatTableDataSource(this.utenti)
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
