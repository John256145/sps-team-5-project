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

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

function addCode() {

}

function getAPIStatus() {
    //formerly, getUpcomingBillsData()
    //api key is declared in api.js as: 'proPublicaApiKey'
    const url="https://api.propublica.org/congress/v1/bills/upcoming/house.json";
    fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    }).then(response => response.json()).then((upcomingBills) => {
        //printing the json file to console
        console.log(upcomingBills);

        //Prints out the contents of "status" from house.json into the website. 
        //If everything goes well, prints out "OK"
        document.getElementById('API-search-container').innerText = upcomingBills.status;
    });
}

function serchBillsWithAPI() {
    var searchquery = document.getElementById("searchbutton").value;

    if (searchquery.length != 0){
        var resultsString = "";

        //resultLimit specifies the number of bills to be returned to the user. This number cannot exceed 20.
        var resultLimit = 5;

        var url="https://api.propublica.org/congress/v1/bills/search.json?query=" + searchquery;
        fetch(url, {method: "GET", headers: {"X-API-Key": proPublicaApiKey}
        }).then(response => response.json()).then((searchedBills) => {
            //searchedBills is the returned json file
            var billslist = searchedBills.results[0].bills;
            console.log(billslist);
            if (billslist.length == 0) {
                document.getElementById('API-search-container').innerText = "No results found.";
            } else if (billslist.length < resultLimit) {
                    for (var i = 0; i<billslist.length; i++) {
                        resultsString += billslist[i].title + "\n\n";
                    }
                    document.getElementById('API-search-container').innerText = resultsString;
            } else {
                    //iterate over the list of bills, and append each to a string
                    for (var i = 0; i<resultLimit; i++) {
                        resultsString += billslist[i].title + "\n\n";
                    }
                    document.getElementById('API-search-container').innerText = resultsString;
            }
        });
    } else { //if the user clicks on submit without a query
        document.getElementById('API-search-container').innerText = "";
    }
}

