import { WebsocketService } from './../../services/websocket.service';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-ppcategoria',
  templateUrl: './ppcategoria.component.html',
  styleUrls: ['./ppcategoria.component.css']
})
export class PpcategoriaComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  categorias = [];
  ppcategoria = [];

  // EJE X
  public barChartLabels: Label[] = this.categorias;

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  // EJE Y
  public barChartData: ChartDataSets[] = [
    { data: this.ppcategoria, label: 'Productos por Categoria' }
  ];


  constructor(public _sProducto: ProductoService,
    public _sWebSocket: WebsocketService) { }

  ngOnInit() {
    this.getPPCategoriaHttp();
    this._sWebSocket.socketProductoCreado().subscribe((data: any) => {

      this.categorias = data.categorias;
      this.barChartLabels = this.categorias;

      this.ppcategoria = data.ppcategoria;
      this.barChartData[0].data = this.ppcategoria;

    });
  }

  getPPCategoriaHttp() {
    this._sProducto.getPPCategoria().subscribe((data: any) => {

      if (data.ok) {
        this.categorias = data.content.categorias;
        this.barChartLabels = this.categorias;

        this.ppcategoria = data.content.ppcategoria;
        this.barChartData[0].data = this.ppcategoria;
      }
    });
  }

}
