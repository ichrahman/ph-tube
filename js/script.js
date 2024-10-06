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

// load videos
const loadVideos = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');

    videos.forEach(video => {
        console.log(video)
        const card = document.createElement("div");
        card.classList = "card card-compact"
        card.innerHTML =
            ` 
        <figure>
            <img
            src=${video.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${video.title}</h2>
            <p>${video.description}</p>
        </div>`;

        videoContainer.append(card);
    })
}





loadCategories()
loadVideos()