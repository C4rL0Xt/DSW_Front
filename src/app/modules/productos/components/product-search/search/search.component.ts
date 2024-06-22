import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { ProductoService } from '../../../services/product-service/producto.service';
import { Product } from '../../../../../core/models/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  productControl = new FormControl();
  filteredProducts: Observable<Product[]>;

  constructor(private productService: ProductoService) {

  }

  ngOnInit(): void {
    /*
    this.filteredProducts = this.productControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    */
  }
  /*
    private _filter(value: string): Product[] {
      const filterValue = value.toLowerCase();
      return this.productService.getProducts().filter(product => product.name.toLowerCase().includes(filterValue));
    }
      */

  onProductSelected(product: Product) {
    //this.productService.selectProduct(product);
  }


}
