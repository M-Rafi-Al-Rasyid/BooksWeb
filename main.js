const searchInput = document.getElementById("search-input");
const search = document.getElementById("search");
const searchItems = search.getElementsByTagName("button");

searchInput.addEventListener("keyup", function (e) {
    const searchValue = e.target.value.toLowerCase();
    for (let i = 0; i < searchItems.length; i++) {
        const text = searchItems[i].textContent.toLowerCase();
        if (text.includes(searchValue)) {
            searchItems[i].style.display = "block";
        }else {
            searchItems[i].style.display = "none";
        }
    }
})