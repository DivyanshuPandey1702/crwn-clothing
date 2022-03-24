import CategoryItem from "../category-item/category-item.component";

import "./category-menu.style.scss";

function CategoryMenu({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItem key={category.id} category={category} />;
      })}
    </div>
  );
}

export default CategoryMenu;
