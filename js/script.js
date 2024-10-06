// todo: fetch categories and display

// load categories
const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

// display categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach(item => {
        // create button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add button the category container
        categoryContainer.append(button);
    })
}

loadCategories()