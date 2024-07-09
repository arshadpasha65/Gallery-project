document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById("imageGallery");

    // Replace with your GitHub repository URL
    const githubRepoUrl = "https://github.com/arshadpasha65/Gallery-project/tree/main/photos";

    fetch(githubRepoUrl)
        .then(response => response.text())
        .then(data => {
            // Splitting the response data to get each image URL
            const imageUrls = data.split("\n");

            // Creating image elements and appending them to the gallery
            imageUrls.forEach(url => {
                if (url.trim() !== "") {
                    const img = document.createElement("img");
                    img.src = url.trim();
                    img.alt = "Gallery Image";
                    gallery.appendChild(img);
                }
            });
        })
        .catch(error => {
            console.error("Error fetching images:", error);
        });
});
