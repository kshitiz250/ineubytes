function searchImages() {
    const query = document.getElementById("searchInput").value;
    const apiKey = "e_7UAMtJ2ljlMby58boTSrx-HF01yLWUuYr1ZFgVEmU"; 
    const apiUrl = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const resultsDiv = document.getElementById("results");
            resultsDiv.innerHTML = "";

            data.results.forEach(photo => {
                const imgElement = document.createElement("img");
                imgElement.src = photo.urls.regular;
                resultsDiv.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}
