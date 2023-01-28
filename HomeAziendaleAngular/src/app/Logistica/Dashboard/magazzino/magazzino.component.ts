import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Magazzino } from 'src/app/Magazzino';
import { Prodotto } from 'src/app/Prodotto';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-magazzino',
  templateUrl: './magazzino.component.html',
  styleUrls: ['./magazzino.component.css']
})
export class MagazzinoComponent {
  magazzino:Magazzino[]=[];
  prodotti:Prodotto[]=[];
  v:string="";
  fornitoriProdotto:string[]=[];
  displayedColumns:string[] = ['id_prodotto','id_fornitore','qta'];
  dataSource:MatTableDataSource<Magazzino> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  prod!:string;
  forn!:string;
  qta!:number;

  constructor(private d:DatabaseService){
    this.d.getMagazzino().subscribe((ma)=>{this.magazzino=ma
      this.dataSource = new MatTableDataSource(this.magazzino)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    this.d.getProdotti().subscribe((p)=>{
      this.prodotti=p;
    })


  }

  prodottoSelezionato(event:MatSelectChange){
    this.v=event.value;
    let uniqueArray = [];
    let map = new Map();
    for(let i=0; i<this.prodotti.length; i++){
        if(this.prodotti[i].id==this.v){
          if (!map.has(this.prodotti[i].fornitoDa)) {
            map.set(this.prodotti[i].fornitoDa, true);
            uniqueArray.push(this.prodotti[i].fornitoDa);
          }
        }
    }
    this.fornitoriProdotto = uniqueArray;

  }

  onSubmit(){
    console.log("PRODOTTO: " + this.prod);
    console.log("FORNITORE: " + this.forn);
    console.log("QUANTITA': " + this.qta);
    this.d.addProdotto(this.prod,this.forn,this.qta);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
