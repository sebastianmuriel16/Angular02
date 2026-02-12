import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { Options } from "../../types";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  readonly #httpClient = inject(HttpClient);

  load<T>(url: string, options: Options): Observable<T> {
    return this.#httpClient.get<T>(url, options) as Observable<T>;
  }
}
