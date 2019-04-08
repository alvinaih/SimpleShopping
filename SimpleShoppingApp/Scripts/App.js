var currentList = {};

function createShoppingList()
{
    currentList.name = $("#shoppingListName").val();
    currentList.items = new Array();

    $("#shoppingListTitle").html(currentList.name);
    $("#shoppingListItems").empty();

    $("#createListDiv").hide();
    $("#shoppingListDiv").show();

    showShoppingList();
}
function showShoppingList() {

    $("#shoppingListTitle").html(currentList.name);
    $("#shoppingListItems").empty();

    $("#createListDiv").hide();
    $("#shoppingListDiv").show();
    $("#newItemName").focus();
}
function addItem()
{

}
$(document).ready(function ()
{
    console.info("Ready!");
    $("#shoppingListName").focus();
    $("#shoppingListName").keyup(function (event)
    {
        if (event.keyCode == 13)
        {
            createShoppingList();
        }
    });
});
