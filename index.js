const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();

    const tabContainer = document.getElementById('tab-container');

    data.data.news_category.slice(0, 3).forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a> 
        `;
        tabContainer.appendChild(div);

    });

    // console.log(data.data.news_category);
};

const cardContainer = document.getElementById('card-container');

async function handleLoadNews(categoryId) {

    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await res.json();

    data.data.forEach(news => {
        const cardDiv = document.createElement('div');
        cardDiv.innerHTML = `
        <div class="card w-[90%] bg-base-100 shadow-xl mx-auto">
        <figure><img src="${news?.image_url}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${news.title.slice(0, 40)}</h2>
            <p>${news.details.slice(0, 100)}</p>
            <small>TOTAL VIEW: ${news.total_view ? news.total_view : '0'}</small>
        </div>
    </div>
        `;
        cardContainer.appendChild(cardDiv);
    })
    console.log(data.data);

}

handleCategory();