$("#search-sitters").on("click", (event) => {
    event.preventDefault();
});

function displaySitters(data) {
    if (data.length !== 0) {
        $("#sitter-results").empty();
        $("#sitter-results").show();
  
        data.forEach((sitter, i) => {
            const div = $("<div>");
  
            div.append(`<h2>${sitter.title}</h2>`);
            div.append(`<p>Sitter: ${sitter.author}</p>`);
            div.append(`<p>Email: ${sitter.genre}</p>`);
            div.append(`<p>Pages: ${sitter.pages}</p>`);
            div.append(`<p>Information:${sitter.information}</p>`);
  
            $("#sitter-results").append(div);
        });
    }
}  