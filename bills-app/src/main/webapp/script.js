// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
function getUpcomingBills() {
    //api key is declared in api.js as: 'proPublicaApiKey'
    const url = "https://api.propublica.org/congress/v1/bills/upcoming/house.json";
    fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    }).then(response => response.json()).then((upcomingBills) => {
        //Prints out the contents of "status" from house.json
        //If everything goes well, prints out "OK" to console
        console.log(upcomingBills.status);
        clearBillData();
        upcomingBills.results[0].bills.map(bill => {
            renderBillFromID(bill.congress, bill.bill_slug);
        });
    });
}

function getRecentBills() {
    const url = "https://api.propublica.org/congress/v1/115/house/bills/introduced.json";
    fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    }).then(response => response.json()).then((recentBills) => {
        clearBillData();
        renderBills(recentBills.results[0].bills);
    });
}

function renderBillFromID(congress, billID) {
    var url = "https://api.propublica.org/congress/v1/" + congress + "/bills/" + billID + ".json";
    fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    }).then(response => response.json()).then((billData) => {
        //this will only render one bill
        renderBills(billData.results);
    });
}

// In charge of diisplaying the bills passed to the function
const renderBills = (bills) => {
    let billsList = document.getElementById("bills-list");

    bills.map(bill => {
        // Creating our individual html components
        let billsListItem = document.createElement('li');
        let itemTitle = document.createElement('h2');
        let itemSector = document.createElement('p');
        let itemDate = document.createElement('p');

        let appendItemSector = billsListItem.appendChild(itemSector);
        let appendTitle = billsListItem.appendChild(itemTitle);
        let appendDate = billsListItem.appendChild(itemDate);

        appendTitle.innerHTML = bill.short_title;
        appendItemSector.innerHTML = bill.committees;
        appendDate.innerHTML = "Date introduced: " + bill.introduced_date;

        // Giving each of our individual bill a class so we can style later
        billsListItem.setAttribute("class", "bills-list-item");
        itemTitle.setAttribute("class", "bills-list-item_title");
        itemSector.setAttribute("class", "bills-list-item_sector");
        itemDate.setAttribute("class", "bills-list-item_date");

        // Appending our main parent list item to our <ul>
        billsList.appendChild(billsListItem);
    });
}
function searchBillsWithApi() {
    var searchquery = document.getElementById("searchbutton").value;

    if (searchquery.length != 0){
        var url = "https://api.propublica.org/congress/v1/bills/search.json?query=" + searchquery;
        fetch(url, {method: "GET", headers: {"X-API-Key": proPublicaApiKey}
        }).then(response => response.json()).then((searchedBills) => {
            //searchedBills is the returned json file
            var billsList = searchedBills.results[0].bills;
            clearBillData();
            if (billsList.length == 0) {
                document.getElementById("bills-list").innerText = "No results found.";
            } else {
                renderBills(billsList);
            }
        });
    } //nothing happens if the user enters nothing into the search bar
}

function clearBillData() {
    document.getElementById("bills-list").innerHTML = "";
}

/**
 * prints translated text to console
 * param: text to be translated
 */
function translate(text){
    const params = new URLSearchParams();
    params.append('text', text);
    fetch('/translate', {method: "POST",
    body: params
    }).then(response => response.text()).then((translatedText) => {
        console.log(translatedText);
  });
}

/** 
 * calls translate
 * used for body onload
 */
function addCode(){
    getRecentBills();
    translate("This text will be translated"); 
}