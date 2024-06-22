import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent implements OnInit {
  productForm: FormGroup;
  lots: FormGroup[] = [];
  totalQuantity: number;

  categories: string[] = ['Electronics', 'Books', 'Clothing', 'Home'];
  types: string[] = ['Type1', 'Type2', 'Type3', 'Type4'];
  operationalStatuses: string[] = ['Operational', 'Non-Operational'];
  availabilityStatuses: string[] = ['Available', 'Unavailable'];
  securityStatuses: string[] = ['Secure', 'Non-Secure'];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.productForm = this.fb.group({
      codigo: [{ value: 'AUTO_GENERATED_CODE', disabled: true }],
      name: ['', Validators.required],
      category: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      weight: ['', [Validators.required, Validators.min(0)]],
      presentation: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Product Form Value:', this.productForm.value);
    }
  }

  generateLots(): void {
    this.lots = [];
    const totalLots = Math.ceil(this.totalQuantity / 200);
    const productName = this.productForm.get('name').value;

    for (let i = 0; i < totalLots; i++) {
      const quantity = (i === totalLots - 1 && this.totalQuantity % 200 !== 0) ? this.totalQuantity % 200 : 200;
      this.lots.push(this.fb.group({
        code: ['', Validators.required],
        operationalStatus: ['', Validators.required],
        availabilityStatus: ['', Validators.required],
        securityStatus: ['', Validators.required],
        productName: [{ value: productName, disabled: true }],
        quantity: [{ value: quantity, disabled: true }, [Validators.required, Validators.min(1), Validators.max(200)]],
        expirationDate: ['', Validators.required]
      }));
    }
  }

  saveEverything(): void {
    if (this.productForm.valid && this.lots.every(lot => lot.valid)) {
      const productData = this.productForm.getRawValue();
      const lotsData = this.lots.map(lot => lot.getRawValue());
      console.log('Product Data:', productData);
      console.log('Lots Data:', lotsData);

      // Show success notification
      this.snackBar.open('Product and batches saved successfully!', 'Close', {
        duration: 3000,
        panelClass: ['snack-bar-success'],
        verticalPosition: 'top', // You can also set 'bottom'
        horizontalPosition: 'center', // You can also set 'start', 'end', or 'left', 'right'
      });
    }
  }

  cancel(): void {
    this.productForm.reset();
    this.lots = [];
  }
}
