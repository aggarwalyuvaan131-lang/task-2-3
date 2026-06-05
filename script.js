fetch("https://hn.algolia.com/api/v1/search?tags=story")
.then(response => response.json())
.then(data => {

    const container =
    document.getElementById("news-container");

    container.innerHTML = "";

    data.hits.slice(0,10).forEach(article => {

        const card =
        document.createElement("div");

        card.classList.add("news-card");

        card.innerHTML = `
            <h3>${article.title}</h3>

            <p>
            Author: ${article.author}
            </p>

            <a href="${article.url}"
            target="_blank">
            Read Article
            </a>
        `;

        container.appendChild(card);

    });

})
.catch(error => {
    console.log(error);
});