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


// Fetched the recent bills from the api
const getUpcomingBills = async (lang) => {
    console.log(lang);

    //api key is declared in api.js as: 'proPublicaApiKey'
    const url = "https://api.propublica.org/congress/v1/115/house/bills/introduced.json";

    await fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    })
    .then(response => response.json())
    .then((upcomingBills) => {
        // Renders the bills on the website        
        renderBills(upcomingBills.results[0].bills, lang);
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
        let itemSector = document.createElement('p');
        let itemDate = document.createElement('p');

        let appendItemSector = billsListItem.appendChild(itemSector);
        let appendTitle = billsListItem.appendChild(itemTitle);
        let appendDate = billsListItem.appendChild(itemDate);

        //appendTitle.innerHTML = bill.short_title;
        //appendItemSector.innerHTML = bill.committees;    

        translate(bill.short_title, lang, appendTitle);
        translate(bill.committees, lang, appendItemSector);
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
 * calls both getUpcomingBills() and translate
 * used for body onload
 */
const addCode = () => {
    getUpcomingBills("en");
    translate("This text will be translated", "en"); 
}

const getLanguageOption = (selectObject) => {
    let selectedLanguage = selectObject.value;

    getUpcomingBills(selectedLanguage);
}
