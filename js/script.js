

function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}


// load categories
const loadCategories = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error))
}

const loadCategoryVideos = (id) => {
    // alert(id);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => displayVideos(data.category))
        .catch((error) => console.log(error))
}



// display categories
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");
    categories.forEach(item => {
        // create button
        const buttonContainer = document.createElement("div");

        buttonContainer.innerHTML =
            `
            <button onclick="loadCategoryVideos(${item.category_id})" class="btn">
                ${item.category}
            </button>
        `

        // button.classList = "btn";
        // button.innerText = item.category;
        // button.onclick = () => alert("hello")
        // add button the category container
        categoryContainer.append(buttonContainer);
    })
}

// load videos
const loadVideos = () => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch((error) => console.log(error))
}


const displayVideos = (videos) => {
    const videoContainer = document.getElementById('videos');
    // console.log(videos)
    videoContainer.innerHTML = "";
    videos.forEach(video => {
        const card = document.createElement("div");
        card.classList = "card card-compact"
        card.innerHTML =
            ` 
        <figure class="h-[200px] relative">
            <img
            src=${video.thumbnail}
            class="h-full w-full
            text-xs object-cover"
            alt="Shoes" />
            ${video.others.posted_date?.length == 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white rounded p-1">${getTimeString(video.others.posted_date)}</span>`}
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-gray-400">${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified ? `<img class="w-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" />` : ""}
                </div>
                <p></p>
            </div>
        </div>`;

        videoContainer.append(card);
    })
}





loadCategories()
loadVideos()