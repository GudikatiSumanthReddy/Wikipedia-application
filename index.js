
let searchInputE1 = document.getElementById("searchInput");

let searchResultsE1 = document.getElementById("searchResults");

let spinnerE1 = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    let {
        link,
        title,
        description
    } = result;
    let ResultItemE1 = document.createElement("div");
    ResultItemE1.classList.add("result-item");
    let titleE1 = document.createElement("a");
    titleE1.href = link;
    titleE1.target = "_blank";
    titleE1.textContent = title;
    titleE1.classList.add("result-title");
    ResultItemE1.appendChild(titleE1);

    let titleBreakE1 = document.createElement("br");
    ResultItemE1.appendChild(titleBreakE1);


    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    ResultItemE1.appendChild(urlEl);

    let linkBreakEl = document.createElement("br");
    ResultItemE1.appendChild(linkBreakEl);
    
     let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    ResultItemE1.appendChild(descriptionEl);
    
    searchResultsE1.appendChild(ResultItemE1);
}

function searchResultMethod(search_results) {
    spinnerE1.classList.add("d-none");
    for(let result of search_results)
    createAndAppendSearchResult(result);
}


function searchElements(event) {
    if (event.key === "Enter") {
        searchResultsE1.textContent = "";
        spinnerE1.classList.remove("d-none");

        let searchInput = searchInputE1.value;

        let requestUrl = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

        let options = {
            method: "GET"
        };

        fetch(requestUrl, options)
            .then(function(Response) {
                return Response.json();

            })

            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                searchResultMethod(search_results);
            });


    }
}

searchInputE1.addEventListener("keydown", searchElements);