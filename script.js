var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
    }

function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["uom"] = document.getElementById("uom").value;
    formData["cost"] = document.getElementById("cost").value;
    formData["invcost"] = document.getElementById("cost").value * document.getElementById("qty").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.uom;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.cost;
    cell6 = newRow.insertCell(5);
	    cell6.innerHTML = data.invcost;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
    document.getElementById("product").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("uom").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cost").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.productCode;
    selectedRow.cells[1].innerHTML = formData.product;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.uom;
    selectedRow.cells[4].innerHTML = formData.cost;
    selectedRow.cells[5].innerHTML = formData.invcost = document.getElementById("cost").value * document.getElementById("qty").value;
}

//Delete the data
function onDelete(td) {
    if (confirm('You are attempting to delete this record, are you sure?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("uom").value = '';
    document.getElementById("cost").value = '';
    selectedRow = null;
}
