import { Injectable } from '@angular/core';
import { Product } from '../../../../core/models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  private products: Product[] = [
    {
      code: '001', name: 'Product 1', category: 'Category A', type: 'Type 1', price: 100, weight: 20, presentation: 'Box', description: 'Description 1', lots: [
        { code: 'L005', operativeStatus: 'Active', disponibilityState: 'Available', securityState: 'Secured', stock: 5, expiredDate: new Date('2026-12-31') }
      ]
    },
    // Add more products as needed
  ];

  private selectedProductSource = new BehaviorSubject<Product>(null);
  selectedProduct$ = this.selectedProductSource.asObservable();

  getProducts(): Product[] {
    return this.products;
  }

  selectProduct(product: Product) {
    this.selectedProductSource.next(product);
  }
}
