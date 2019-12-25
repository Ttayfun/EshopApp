import {Component, OnInit, Output} from '@angular/core';
import {CategoryRepository} from 'src/app/model/category.repository';
import {Category} from 'src/app/model/category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selectedCategory: Category = null;

  constructor(private categoryRepository: CategoryRepository,) {
  }

  @Output()
  ngOnInit() {
  }


  get categories(): Category[] {
    return this.categoryRepository.getCategories();
  }

  changeCategory(selected?: Category) {
    this.selectedCategory = selected;
  }


}
