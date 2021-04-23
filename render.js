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
        // let cellIdx = $(clickedCell).text(); // all these get functions return strings
        // console.log(cellIdx);

        let rid = $(clickedCell).attr("rid");
        let cid = $(clickedCell).attr("cid");

        let row = Number(rid) + 1;
        let col = String.fromCharCode(Number(cid) + 65);

        let address = col + row;
        console.log(address);

        $("#address").val(address);
    })
})