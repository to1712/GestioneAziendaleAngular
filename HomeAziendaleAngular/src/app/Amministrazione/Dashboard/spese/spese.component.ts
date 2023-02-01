import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Filiale } from 'src/app/Filiale';
import { DatabaseService } from 'src/app/service/database.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-spese',
  templateUrl: './spese.component.html',
  styleUrls: ['./spese.component.css']
})
export class SpeseComponent {
  filiali:Filiale[]=[];
  displayedColumns:string[] = ['id', 'citta','spese_gen','spese_feb','spese_mar','spese_apr'
  ,'spese_mag','spese_giu','spese_lug','spese_ago'
  ,'spese_set','spese_ott','spese_nov','spese_dic'];

  dataSource:MatTableDataSource<Filiale> = new MatTableDataSource();


  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(private d:DatabaseService){
    this.d.getFiliali().subscribe((fi)=>{this.filiali=fi
      this.dataSource = new MatTableDataSource(this.filiali)
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

  exportEXCEL() {

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(this.dataSource.data);
    XLSX.utils.book_append_sheet(wb, ws, 'Filiali');
    XLSX.writeFile(wb, 'Filiali.xlsx');

}

}
