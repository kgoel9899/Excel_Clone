// alert("Hello");
// cheerio se elements are selected -> it is based on jquery -> helps in change of dom

$(document).ready(function() {
    // these are representations of the element
    // let allCells = $(".grid .row .cell");
    // console.log(allCells);

    // jquery ne events diye huye hain
    $(".grid .row .cell").on("click", function() {
        // console.log("cell was clicked");
        let clickedCell = this;
        let cellIdx = $(clickedCell).text();
        console.log(cellIdx);
    })
})