import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {Category} from './category.model';

@Injectable()
export class CategoryRepository {

  private categories: Category [] = [];

  constructor(private restService: RestService) {
    this.restService.getCategories().subscribe(ct => this.categories = ct);
  }

  ngOninit() {
  }

  getCategory(id: number): Category {
    return this.categories.find(ct => ct.id === id);
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
