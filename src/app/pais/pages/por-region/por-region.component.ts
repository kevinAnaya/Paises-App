import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService) {
  }

  getClassCss(region: string): string{
    return (region === this.regionActiva) ? 'btn btn-primary': 'btn btn-outline-primary';
  }

  activarRgion(region: string){
    this.regionActiva = region;
  }

  //TODO: hacer el llamado al servicio

  buscarPorRegion(){
    this.paisService.BuscarRegion(this.regionActiva)
        .subscribe(resp => {
          this.paises = resp;
        })
  }


}
