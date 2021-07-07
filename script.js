//function used to create table row data 
function trth(elementname, value = "") {
    var td = document.createElement(elementname);
    td.innerHTML = value;
    return td;
}


//Event handler for submit button

let submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
    e.preventDefault();

    //fetches all the form element values
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let address1 = document.getElementById("address1");
    let address2 = document.getElementById("address2");
    let pin = document.getElementById("pin");
    let state = document.getElementById("state");
    let country = document.getElementById("country");

    let gender = document.getElementsByName("gender");
    let genderValue;
    if (gender[0].checked) {
        genderValue = "Male";
    }
    else {
        genderValue = "Female";
    }

    //append food items to list
    let food = document.getElementsByName("food");
    let foodList = [];
    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodList.push(food[i].value);
        }
    }
    //if selected food options are less than 2 give alert msg, otherwise update table
    if (foodList.length < 2) {
        alert("Must Choose atleast 2 out of 5 options in food");
    }
    else {
        updatetable(fname.value, lname.value, address1.value + " " + address2.value, pin.value, genderValue, foodList.join(", "), state.value, country.value);
    }
});

//Updates table based on button clicked.
function updatetable(fname = "", lname = "", address = "", pin = "", gender = "", food = "", state = "", country = "") {
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");
    tr.append(trth("td", fname));
    tr.append(trth("td", lname));
    tr.append(trth("td", address));
    tr.append(trth("td", pin));
    tr.append(trth("td", gender));
    tr.append(trth("td", food));
    tr.append(trth("td", state));
    tr.append(trth("td", country));
    tbody.append(tr);
    //append the updated tbody to table
    let table = document.getElementById("table");
    table.append(tbody);
    //reset form elements after adding row to table
    document.getElementById("myForm").reset();

}
