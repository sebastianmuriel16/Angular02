import { Injectable, inject } from "@angular/core";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { Products } from "../../types";
import { PaginationParams } from "../../types";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private readonly apiService = inject(ApiService);

  getProducts(url: string, params: PaginationParams): Observable<Products> {
    return this.apiService.load(url, {
      params,
      responseType: "json",
    });
  }
}
