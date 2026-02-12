import { Component } from "@angular/core";
import { ProductsService } from "../services/products.service";
import { inject } from "@angular/core";
import { rxResource } from "@angular/core/rxjs-interop";
import { Products } from "../../types";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-home",
  imports: [],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  readonly #productService = inject(ProductsService);

  productsResource = rxResource({
    loader: () =>
      this.#productService
        .getProducts("http://localhost:3000/clothes", {
          page: 0,
          perPage: 5,
        })
        .pipe(
          tap((products: Products) => console.log("products:", products.items)),
        ),
  });
}
