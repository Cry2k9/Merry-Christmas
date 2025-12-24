function fetchPokemon() {
    const name = document.getElementById("pokemonName").value.toLowerCase();
    const image = document.getElementById("pokemonImage");
    const info = document.getElementById("pokemonInfo");

    if (name) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(response => response.json())
            .then(data => {
                image.src = data.sprites.front_default;
                image.style.display = "block";
                info.innerHTML = `
                    <p><strong>Tên:</strong> ${data.name.toUpperCase()}</p>
                    <p><strong>Loại:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
                    <p><strong>Chiều cao:</strong> ${data.height / 10} m</p>
                    <p><strong>Cân nặng:</strong> ${data.weight / 10} kg</p>
                    <p><strong>Mô tả:</strong> Đang tải...</p>
                `;

                // Lấy thêm mô tả từ species API
                return fetch(data.species.url);
            })
            .then(response => response.json())
            .then(speciesData => {
                const description = speciesData.flavor_text_entries.find(entry => entry.language.name === "en");
                if (description) {
                    document.querySelector(".pokemon-info p:last-child").innerHTML = `<strong>Mô tả:</strong> ${description.flavor_text}`;
                }
            })
            .catch(() => {
                image.style.display = "none";
                info.innerHTML = `<p>Không tìm thấy Pokémon!</p>`;
            });
    }
}