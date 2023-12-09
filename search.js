function search() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var searchResultsContainer = document.getElementById('searchResults');
    searchResultsContainer.innerHTML = '';

    // Mendapatkan semua elemen dengan class 'card'
    var cardsToSearch = document.getElementsByClassName('card');

    // Melakukan pencarian
    for (var i = 0; i < cardsToSearch.length; i++) {
        var itemName = cardsToSearch[i].querySelector('.nama').textContent.toLowerCase();

        // Jika teks pencarian ditemukan dalam elemen, tambahkan ke hasil pencarian
        if (itemName.includes(searchTerm)) {
            var resultItem = document.createElement('div');
            resultItem.textContent = cardsToSearch[i].querySelector('.nama').textContent;
            searchResultsContainer.appendChild(resultItem);
        }
    }
}
