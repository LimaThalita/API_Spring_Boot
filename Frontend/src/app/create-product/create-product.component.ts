import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../app.component';
import { NgModel, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  imports: [FormsModule], // Importa o FormsModule para usar [(ngModel)]
  styleUrls: ['./create-product.component.css'], // Estilos opcionais
})

export class CreateProductComponent {

  product: Product = {
    name: '',
    cpu: 0,
    memory: 0,
    disk: 0
  };

  constructor(private productService: ProductService, private router: Router) {}

  onSubmit() {
    if (this.product.name && this.product.cpu && this.product.memory && this.product.disk) {
      this.productService.createProduct(this.product).subscribe({
        next: () => this.router.navigate(['/products']),
        error: (err: any) => console.error('Erro ao criar produto', err)
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}

