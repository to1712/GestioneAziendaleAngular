import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/service/database.service';
import { Utente } from 'src/app/Utente';

@Component({
  selector: 'app-samministrazione',
  templateUrl: './samministrazione.component.html',
  styleUrls: ['./samministrazione.component.css']
})
export class SamministrazioneComponent implements OnInit {
  utenti:Utente[]=[];
  displayedColumns: string[] = ['nome', 'cognome','stipendio'];
  dataSource: MatTableDataSource<Utente>=new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;


  constructor(private s:DatabaseService){
    
  }
  ngOnInit(): void {
    this.s.getUtenti().subscribe((ut)=>{
      for(let i=0; i<ut.length; i++){
       if(ut[i].ruolo=="mns"){
         this.utenti.push(ut[i]);
         //console.log( this.utenti);
       }
      }
      //console.log(ut);
       console.log(this.utenti);
       this.dataSource = new MatTableDataSource(this.utenti);
       console.log(this.dataSource);
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
