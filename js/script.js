// todo: fetch categories and display

// load categories
const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
}

// display categories
const displayCategories = (data) => {
    console.log(data)
}

loadCategories()