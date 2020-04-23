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


const getUpcomingBills = async (lang) => {
    //api key is declared in api.js as: 'proPublicaApiKey'
    const url = "https://api.propublica.org/congress/v1/bills/upcoming/house.json";

    await fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    })
    .then(response => response.json())
    .then((upcomingBills) => {
        clearBillData();

        if (upcomingBills.results[0].bills.length == 0) {
            document.getElementById("bills-list").innerHTML = "No upcoming bills found, try again later.";
        } else {
            upcomingBills.results[0].bills.map(bill => {
                renderBillFromID(bill.congress, bill.bill_slug, lang);
            });
        }

    });
}

const getRecentBills = async (lang) =>  {
    const url = "https://api.propublica.org/congress/v1/115/house/bills/introduced.json";

    await fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    }).then(response => response.json()).then((recentBills) => {
        clearBillData();
        renderBills(recentBills.results[0].bills, lang);
    });
}

const renderBillFromID = async (congress, billID, lang) => {
    var url = "https://api.propublica.org/congress/v1/" + congress + "/bills/" + billID + ".json";

    await fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    }).then(response => response.json()).then((billData) => {
        //this will only render one bill
        renderBills(billData.results, lang);
    });
}

// In charge of diisplaying the bills passed to the function
const renderBills = (bills, lang) => {
    let billsList = document.getElementById("bills-list");
    billsList.innerHTML = "";

    bills.map(bill => {
        // Creating our individual html components
        let billsListItem = document.createElement('li');
        let itemTitle = document.createElement('h2');
        let itemLink = document.createElement('a');
        let itemSector = document.createElement('p');
        let itemDate = document.createElement('p');


        let appendItemSector = billsListItem.appendChild(itemSector);
        let appendTitle = billsListItem.appendChild(itemTitle);
        let appendDate = billsListItem.appendChild(itemDate); 
        let appendLink = billsListItem.appendChild(itemLink);

        translate(bill.short_title, lang, appendTitle);
        translate(bill.committees, lang, appendItemSector);
        appendDate.innerHTML = "Date introduced: " + bill.introduced_date;
        appendLink.innerHTML = "View bill";

        // Giving each of our individual bill a class so we can style later
        billsListItem.setAttribute("class", "bills-list-item");
        itemTitle.setAttribute("class", "bills-list-item_title");
        itemSector.setAttribute("class", "bills-list-item_sector");
        itemDate.setAttribute("class", "bills-list-item_date");

        itemLink.setAttribute("class", "bills-list-item_link");
        itemLink.setAttribute("href", `${bill.govtrack_url}`)
        itemLink.setAttribute("target", "_blank");
        
        // Appending our main parent list item to our <ul>
        billsList.appendChild(billsListItem);
    });
}

function searchBillsWithApi() {
    var searchquery = document.getElementById("searchbutton").value;

    if (searchquery !== ""){
        var url = "https://api.propublica.org/congress/v1/bills/search.json?query=" + searchquery;
        fetch(url, {method: "GET", headers: {"X-API-Key": proPublicaApiKey}
        }).then(response => response.json()).then((searchedBills) => {
            //searchedBills is the returned json file
            var billsList = searchedBills.results[0].bills;
            clearBillData();

            if (billsList.length == 0) {
                document.getElementById("bills-list").innerText = "No results found.";
            } else {
                renderBills(billsList, "en");
            }
        });
    } else {
        // Fetch the default selected data when search input value is empty
        let selectedLang = localStorage.getItem('lang');
        let selectedBillsType = localStorage.getItem('billType');

        if (selectedBillsType === "recent") getRecentBills(selectedLang);
        if (selectedBillsType === "upcoming") getUpcomingBills(selectedLang);
    }
}

function clearBillData() {
    document.getElementById("bills-list").innerHTML = "";
}

/**
 * prints translated text to console
 * param: text to be translated
 */
const translate = async (text, lang, element) => {
    const params = new URLSearchParams();
    params.append('text', text);
    params.append('lang', lang);

    await fetch('/translate', {
        method: "POST",
        body: params
    })
    .then(response => response.text())
    .then((translatedText) => {
        element.innerHTML = translatedText;
  });
}

/** 
 * calls translate
 * used for body onload
 */
const addCode = () => {
    // Setting our default values
    localStorage.setItem("billType", "recent");
    localStorage.setItem("lang", "en");

    getRecentBills("en");
}

const getLanguageOption = (selectObject) => {
    let selectedLanguage = selectObject.value;

    // Placing the new language value in local storage
    localStorage.setItem('lang', selectedLanguage);

    // Getting the value of the type of bills the user is currently trying to display
    const currentBillsType = localStorage.getItem('billType');

    // Rendering the bill based on the selected language
    if (currentBillsType === "recent") getRecentBills(selectedLanguage);
    if (currentBillsType === "upcoming") getUpcomingBills(selectedLanguage);
}

const getBillsTypeOption = (selectObject) => {
    let selectedBillsType = selectObject.value;
    
    localStorage.setItem('billType', selectedBillsType);

    const currentLang = localStorage.getItem('lang');

    if (selectedBillsType === "recent") getRecentBills(currentLang);
    if (selectedBillsType === "upcoming") getUpcomingBills(currentLang);
}