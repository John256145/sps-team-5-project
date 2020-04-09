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

// Temporary api response
// This helps with working on the front end without making any calls to the api
// Taken from https://projects.propublica.org/api-docs/congress-api/bills/#get-upcoming-bills
const mockResponse = {
    "status": "OK",
    "copyright": "Copyright (c) 2017 Pro Publica Inc. All Rights Reserved.",
    "results": [{
        "congress": 115,
        "chamber": "House",
        "num_results": 20,
        "offset": 0,
        "bills": [{
                "bill_id": "hr4256-115",
                "bill_slug": "hr4256",
                "bill_type": "hr",
                "number": "H.R.4256",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4256.json",
                "title": "To amend the Public Health Service Act to authorize the expansion of activities related to Alzheimer's disease, cognitive decline, and brain health under the Alzheimer's Disease and Healthy Aging Program, and for other purposes.",
                "short_title": "To amend the Public Health Service Act to authorize the expansion of activities related to Alzheimer's disease, cognitive decline, and brain health under the Alzheimer's Disease and Healthy Aging Program, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "G000558",
                "sponsor_name": "Brett Guthrie",
                "sponsor_state": "KY",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/G000558.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4256",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4256",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 3,
                "cosponsors_by_party": {
                    "D": 2,
                    "R": 1
                },
                "committees": "House Energy and Commerce Committee",
                "committee_codes": ["HSIF"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the House Committee on Energy and Commerce."
            },
            {
                "bill_id": "hr4254-115",
                "bill_slug": "hr4254",
                "bill_type": "hr",
                "number": "H.R.4254",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4254.json",
                "title": "To amend the National Science Foundation Authorization Act of 2002 to strengthen the aerospace workforce pipeline by the promotion of Robert Noyce Teacher Scholarship Program and National Aeronautics and Space Administration internship and fellowship opportunities to women, and for other purposes.",
                "short_title": "To amend the National Science Foundation Authorization Act of 2002 to strengthen the aerospace workforce pipeline by the promotion of Robert Noyce Teacher Scholarship Program and National Aeronautics and Space Administration internship and fellowship oppo",
                "sponsor_title": "Rep.",
                "sponsor_id": "K000387",
                "sponsor_name": "Steve Knight",
                "sponsor_state": "CA",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/K000387.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4254",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4254",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 3,
                "cosponsors_by_party": {
                    "D": 2,
                    "R": 1
                },
                "committees": "House Science, Space, and Technology Committee",
                "committee_codes": ["HSSY"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the House Committee on Science, Space, and Technology."
            },
            {
                "bill_id": "hr4260-115",
                "bill_slug": "hr4260",
                "bill_type": "hr",
                "number": "H.R.4260",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4260.json",
                "title": "To amend the Internal Revenue Code of 1986 to establish a new tax credit and grant program to stimulate investment and healthy nutrition options in food deserts, and for other purposes.",
                "short_title": "To amend the Internal Revenue Code of 1986 to establish a new tax credit and grant program to stimulate investment and healthy nutrition options in food deserts, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "R000577",
                "sponsor_name": "Tim Ryan",
                "sponsor_state": "OH",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/R000577.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4260",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4260",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 3,
                "cosponsors_by_party": {
                    "R": 1,
                    "D": 2
                },
                "committees": "House Agriculture Committee",
                "committee_codes": ["HSWM"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the Committee on Ways and Means, and in addition to the Committee on Agriculture, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned."
            },
            {
                "bill_id": "hr4262-115",
                "bill_slug": "hr4262",
                "bill_type": "hr",
                "number": "H.R.4262",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4262.json",
                "title": "To authorize members and former members of the uniformed services who are entitled to veterans disability compensation to continue to participate in the Thrift Savings Plan through the deduction and deposit of a percentage of their veterans disability compensation to the Thrift Savings Fund.",
                "short_title": "To authorize members and former members of the uniformed services who are entitled to veterans disability compensation to continue to participate in the Thrift Savings Plan through the deduction and deposit of a percentage of their veterans disability com",
                "sponsor_title": "Rep.",
                "sponsor_id": "W000819",
                "sponsor_name": "Mark Walker",
                "sponsor_state": "NC",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/W000819.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4262",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4262",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 0,
                "cosponsors_by_party": {},
                "committees": "House Oversight and Government Reform Committee",
                "committee_codes": ["HSGO"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the House Committee on Oversight and Government Reform."
            },
            {
                "bill_id": "hr4259-115",
                "bill_slug": "hr4259",
                "bill_type": "hr",
                "number": "H.R.4259",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4259.json",
                "title": "To amend the Public Health Service Act to authorize the Secretary of Health and Human Services to award grants for naloxone rescue kits in public libraries, and for other purposes.",
                "short_title": "To amend the Public Health Service Act to authorize the Secretary of Health and Human Services to award grants for naloxone rescue kits in public libraries, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "M001185",
                "sponsor_name": "Sean Patrick Maloney",
                "sponsor_state": "NY",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/M001185.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4259",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4259",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 0,
                "cosponsors_by_party": {},
                "committees": "House Energy and Commerce Committee",
                "committee_codes": ["HSIF"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the House Committee on Energy and Commerce."
            },
            {
                "bill_id": "hr4257-115",
                "bill_slug": "hr4257",
                "bill_type": "hr",
                "number": "H.R.4257",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4257.json",
                "title": "To maximize land management efficiencies, promote land conservation, generate education funding, and for other purposes.",
                "short_title": "To maximize land management efficiencies, promote land conservation, generate education funding, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "S001192",
                "sponsor_name": "Chris Stewart",
                "sponsor_state": "UT",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/S001192.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4257",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4257",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 1,
                "cosponsors_by_party": {
                    "D": 1
                },
                "committees": "House Natural Resources Committee",
                "committee_codes": ["HSII"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the House Committee on Natural Resources."
            },
            {
                "bill_id": "hr4255-115",
                "bill_slug": "hr4255",
                "bill_type": "hr",
                "number": "H.R.4255",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4255.json",
                "title": "To amend the Internal Revenue Code of 1986 to exclude corporations operating prisons from the definition of taxable REIT subsidiary.",
                "short_title": "To amend the Internal Revenue Code of 1986 to exclude corporations operating prisons from the definition of taxable REIT subsidiary.",
                "sponsor_title": "Rep.",
                "sponsor_id": "M001137",
                "sponsor_name": "Gregory W. Meeks",
                "sponsor_state": "NY",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/M001137.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4255",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4255",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 0,
                "cosponsors_by_party": {},
                "committees": "House Ways and Means Committee",
                "committee_codes": ["HSWM"],
                "subcommittee_codes": [],
                "primary_subject": "Taxation",
                "summary": "Ending Tax Breaks for Private Prisons Act  This bill amends the Internal Revenue Code to exclude from the definition of \"taxable REIT (Real Estate Investment Trust) subsidiary\" any corporation which directly or indirectly: (1) operates or manages a prison facility or provides services at or in connection with a prison facility; or (2) provides to any other person (under a franchise, license, or otherwise) rights to any brand name under which any prison facility is operated, subject to specified exceptions. ",
                "summary_short": "Ending Tax Breaks for Private Prisons Act  This bill amends the Internal Revenue Code to exclude from the definition of &quot;taxable REIT (Real Estate Investment Trust) subsidiary&quot; any corporation which directly or indirectly: (1) operates or manages a prison facility or provides services at or in connection with a prison facility; or (2) provides to any other person (under a franchise, license, or otherwise) rights to any brand name under which any prison facility is operated, subject to specifi...",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the House Committee on Ways and Means."
            },
            {
                "bill_id": "hr4261-115",
                "bill_slug": "hr4261",
                "bill_type": "hr",
                "number": "H.R.4261",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4261.json",
                "title": "To improve public safety, accountability, transparency, and respect for federalism in Federal criminal law by applying evidence-based reforms already made by some States, and reinvesting the resulting savings from doing so in additional evidence-based criminal justice strategies that are proven to reduce recidivism and crime, and the burden of the criminal justice system on the taxpayer.",
                "short_title": "To improve public safety, accountability, transparency, and respect for federalism in Federal criminal law by applying evidence-based reforms already made by some States, and reinvesting the resulting savings from doing so in additional evidence-based cri",
                "sponsor_title": "Rep.",
                "sponsor_id": "S000185",
                "sponsor_name": "Robert C. Scott",
                "sponsor_state": "VA",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/S000185.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4261",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4261",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 7,
                "cosponsors_by_party": {
                    "R": 4,
                    "D": 3
                },
                "committees": "House Energy and Commerce Committee",
                "committee_codes": ["HSJU"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the Committee on the Judiciary, and in addition to the Committee on Energy and Commerce, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned."
            },
            {
                "bill_id": "hr4258-115",
                "bill_slug": "hr4258",
                "bill_type": "hr",
                "number": "H.R.4258",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4258.json",
                "title": "To promote the development of local strategies to coordinate use of assistance under sections 8 and 9 of the United States Housing Act of 1937 with public and private resources, to enable eligible families to achieve economic independence and self-sufficiency, and for other purposes.",
                "short_title": "To promote the development of local strategies to coordinate use of assistance under sections 8 and 9 of the United States Housing Act of 1937 with public and private resources, to enable eligible families to achieve economic independence and self-suffici",
                "sponsor_title": "Rep.",
                "sponsor_id": "D000614",
                "sponsor_name": "Sean Duffy",
                "sponsor_state": "WI",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/D000614.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4258",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4258",
                "introduced_date": "2017-11-06",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 1,
                "cosponsors_by_party": {
                    "D": 1
                },
                "committees": "House Financial Services Committee",
                "committee_codes": ["HSBA"],
                "subcommittee_codes": [],
                "primary_subject": "Housing and Community Development",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Referred to the House Committee on Financial Services."
            },
            {
                "bill_id": "hres607-115",
                "bill_slug": "hres607",
                "bill_type": "hres",
                "number": "H.RES.607",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hres607.json",
                "title": "Providing for consideration of the bill (H.R. 3043) to modernize hydropower policy, and for other purposes, and providing for consideration of the bill (H.R. 3441) to clarify the treatment of two or more employers as joint employers under the National Labor Relations Act and the Fair Labor Standards Act of 1938.",
                "short_title": "Providing for consideration of the bill (H.R. 3043) to modernize hydropower policy, and for other purposes, and providing for consideration of the bill (H.R. 3441) to clarify the treatment of two or more employers as joint employers under the National Lab",
                "sponsor_title": "Rep.",
                "sponsor_id": "B001289",
                "sponsor_name": "Bradley Byrne",
                "sponsor_state": "AL",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/B001289.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-resolution/607",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hres607",
                "introduced_date": "2017-11-06",
                "active": true,
                "last_vote": "2017-11-07",
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 0,
                "cosponsors_by_party": {},
                "committees": "House Rules Committee",
                "committee_codes": ["HSRU"],
                "subcommittee_codes": [],
                "primary_subject": "Congress",
                "summary": "Sets forth the rule for consideration of the bill (H.R. 3043) to modernize hydropower policy, and for other purposes, and providing for consideration of the bill (H.R. 3441) to clarify the treatment of two or more employers as joint employers under the National Labor Relations Act and the Fair Labor Standards Act of 1938.",
                "summary_short": "Sets forth the rule for consideration of the bill (H.R. 3043) to modernize hydropower policy, and for other purposes, and providing for consideration of the bill (H.R. 3441) to clarify the treatment of two or more employers as joint employers under the National Labor Relations Act and the Fair Labor Standards Act of 1938.",
                "latest_major_action_date": "2017-11-06",
                "latest_major_action": "Placed on the House Calendar, Calendar No. 98."
            },
            {
                "bill_id": "hr4249-115",
                "bill_slug": "hr4249",
                "bill_type": "hr",
                "number": "H.R.4249",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4249.json",
                "title": "To provide housing and Medicaid assistance to families affected by a major disaster, and for other purposes.",
                "short_title": "To provide housing and Medicaid assistance to families affected by a major disaster, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "M001202",
                "sponsor_name": "Stephanie Murphy",
                "sponsor_state": "FL",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/M001202.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4249",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4249",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 1,
                "cosponsors_by_party": {
                    "D": 1
                },
                "committees": "House Financial Services Committee",
                "committee_codes": ["HSIF"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the Committee on Energy and Commerce, and in addition to the Committee on Financial Services, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned."
            },
            {
                "bill_id": "hr4252-115",
                "bill_slug": "hr4252",
                "bill_type": "hr",
                "number": "H.R.4252",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4252.json",
                "title": "To expand geothermal production, and for other purposes.",
                "short_title": "To expand geothermal production, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "S001148",
                "sponsor_name": "Mike Simpson",
                "sponsor_state": "ID",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/S001148.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4252",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4252",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 1,
                "cosponsors_by_party": {
                    "D": 1
                },
                "committees": "House Natural Resources Committee",
                "committee_codes": ["HSII"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the House Committee on Natural Resources."
            },
            {
                "bill_id": "hr4243-115",
                "bill_slug": "hr4243",
                "bill_type": "hr",
                "number": "H.R.4243",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4243.json",
                "title": "To establish a commission for the purpose of making recommendations regarding the modernization or realignment of facilities of the Veterans Health Administration, to improve construction and management leases of the Department of Veterans Affairs, to amend and appropriate funds for the Veterans Choice Program, and for other purposes.",
                "short_title": "To establish a commission for the purpose of making recommendations regarding the modernization or realignment of facilities of the Veterans Health Administration, to improve construction and management leases of the Department of Veterans Affairs, to ame",
                "sponsor_title": "Rep.",
                "sponsor_id": "R000582",
                "sponsor_name": "Phil Roe",
                "sponsor_state": "TN",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/R000582.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4243",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4243",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 14,
                "cosponsors_by_party": {
                    "R": 14
                },
                "committees": "House Appropriations Committee",
                "committee_codes": ["HSVR"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the Committee on Veterans' Affairs, and in addition to the Committees on Rules, and Appropriations, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned."
            },
            {
                "bill_id": "hr4251-115",
                "bill_slug": "hr4251",
                "bill_type": "hr",
                "number": "H.R.4251",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4251.json",
                "title": "To promote the use of resilient energy systems to rebuild infrastructure following disasters.",
                "short_title": "To promote the use of resilient energy systems to rebuild infrastructure following disasters.",
                "sponsor_title": "Rep.",
                "sponsor_id": "S000248",
                "sponsor_name": "José E. Serrano",
                "sponsor_state": "NY",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/S000248.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4251",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4251",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 7,
                "cosponsors_by_party": {
                    "R": 1,
                    "D": 6
                },
                "committees": "House Science, Space, and Technology Committee",
                "committee_codes": ["HSPW"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the Committee on Transportation and Infrastructure, and in addition to the Committee on Science, Space, and Technology, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned."
            },
            {
                "bill_id": "hr4250-115",
                "bill_slug": "hr4250",
                "bill_type": "hr",
                "number": "H.R.4250",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4250.json",
                "title": "To promote category management principles within the Federal Government, and for other purposes.",
                "short_title": "To promote category management principles within the Federal Government, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "R000585",
                "sponsor_name": "Tom Reed",
                "sponsor_state": "NY",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/R000585.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4250",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4250",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 6,
                "cosponsors_by_party": {
                    "D": 6
                },
                "committees": "House Oversight and Government Reform Committee",
                "committee_codes": ["HSGO"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the House Committee on Oversight and Government Reform."
            },
            {
                "bill_id": "hr4253-115",
                "bill_slug": "hr4253",
                "bill_type": "hr",
                "number": "H.R.4253",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4253.json",
                "title": "To amend the Immigration and Nationality Act to provide for certain protections for aliens granted temporary protected status or deferred enforced departure, and for other purposes.",
                "short_title": "To amend the Immigration and Nationality Act to provide for certain protections for aliens granted temporary protected status or deferred enforced departure, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "V000081",
                "sponsor_name": "Nydia M. Velázquez",
                "sponsor_state": "NY",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/V000081.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4253",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4253",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 19,
                "cosponsors_by_party": {
                    "D": 19
                },
                "committees": "House Judiciary Committee",
                "committee_codes": ["HSJU"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the House Committee on the Judiciary."
            },
            {
                "bill_id": "hr4240-115",
                "bill_slug": "hr4240",
                "bill_type": "hr",
                "number": "H.R.4240",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4240.json",
                "title": "To protect Second Amendment rights, ensure that all individuals who should be prohibited from buying a firearm are listed in the National Instant Criminal Background Check System, and provide a responsible and consistent background check process.",
                "short_title": "Public Safety and Second Amendment Rights Protection Act of 2017",
                "sponsor_title": "Rep.",
                "sponsor_id": "T000460",
                "sponsor_name": "Mike Thompson",
                "sponsor_state": "CA",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/T000460.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4240",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4240",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 37,
                "cosponsors_by_party": {
                    "R": 2,
                    "D": 35
                },
                "committees": "House Judiciary Committee",
                "committee_codes": ["HSJU"],
                "subcommittee_codes": [],
                "primary_subject": "Crime and Law Enforcement",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the House Committee on the Judiciary."
            },
            {
                "bill_id": "hr4241-115",
                "bill_slug": "hr4241",
                "bill_type": "hr",
                "number": "H.R.4241",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4241.json",
                "title": "To direct the Secretary of Transportation to carry out a pilot program to improve transportation planning, and for other purposes.",
                "short_title": "To direct the Secretary of Transportation to carry out a pilot program to improve transportation planning, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "E000293",
                "sponsor_name": "Elizabeth Esty",
                "sponsor_state": "CT",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/E000293.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4241",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4241",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 3,
                "cosponsors_by_party": {
                    "D": 1,
                    "R": 2
                },
                "committees": "House Transportation and Infrastructure Committee",
                "committee_codes": ["HSPW"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the House Committee on Transportation and Infrastructure."
            },
            {
                "bill_id": "hr4246-115",
                "bill_slug": "hr4246",
                "bill_type": "hr",
                "number": "H.R.4246",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4246.json",
                "title": "To amend the Mineral Leasing Act to create a buffer in between oil and gas drilling operations and homes, businesses, schools, and other buildings that require special protection, and for other purposes.",
                "short_title": "To amend the Mineral Leasing Act to create a buffer in between oil and gas drilling operations and homes, businesses, schools, and other buildings that require special protection, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "B001300",
                "sponsor_name": "Nanette Barragán",
                "sponsor_state": "CA",
                "sponsor_party": "D",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/B001300.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4246",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4246",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 8,
                "cosponsors_by_party": {
                    "D": 8
                },
                "committees": "House Natural Resources Committee",
                "committee_codes": ["HSII"],
                "subcommittee_codes": [],
                "primary_subject": "Energy",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the House Committee on Natural Resources."
            },
            {
                "bill_id": "hr4242-115",
                "bill_slug": "hr4242",
                "bill_type": "hr",
                "number": "H.R.4242",
                "bill_uri": "https://api.propublica.org/congress/v1/115/bills/hr4242.json",
                "title": "To amend title 38, United States Code, to establish a permanent VA Care in the Community Program, and for other purposes.",
                "short_title": "To amend title 38, United States Code, to establish a permanent VA Care in the Community Program, and for other purposes.",
                "sponsor_title": "Rep.",
                "sponsor_id": "R000582",
                "sponsor_name": "Phil Roe",
                "sponsor_state": "TN",
                "sponsor_party": "R",
                "sponsor_uri": "https://api.propublica.org/congress/v1/members/R000582.json",
                "gpo_pdf_uri": null,
                "congressdotgov_url": "https://www.congress.gov/bill/115th-congress/house-bill/4242",
                "govtrack_url": "https://www.govtrack.us/congress/bills/115/hr4242",
                "introduced_date": "2017-11-03",
                "active": false,
                "last_vote": null,
                "house_passage": null,
                "senate_passage": null,
                "enacted": null,
                "vetoed": null,
                "cosponsors": 23,
                "cosponsors_by_party": {
                    "R": 13,
                    "D": 10
                },
                "committees": "House Veterans&#39; Affairs Committee",
                "committee_codes": ["HSVR"],
                "subcommittee_codes": [],
                "primary_subject": "",
                "summary": "",
                "summary_short": "",
                "latest_major_action_date": "2017-11-03",
                "latest_major_action": "Referred to the House Committee on Veterans' Affairs."
            }
        ]
    }]
}

function getUpcomingBills() {
    //api key is declared in api.js as: 'proPublicaApiKey'
    const url="https://api.propublica.org/congress/v1/bills/upcoming/house.json";
    fetch(url, {
        method: "GET", 
        headers: {
            "X-API-Key": proPublicaApiKey
        }
    }).then(response => response.json()).then((upcomingBills) => {
        //Prints out the contents of "status" from house.json
        //If everything goes well, prints out "OK" to console
        console.log(upcomingBills.status);
        upcomingBills.results[0].bills.map(i => {
            renderBillFromID(i.congress, i.bill_slug);
        });
    });
}

function renderBillFromID(congress, billID) {
    var url="https://api.propublica.org/congress/v1/" + congress + "/bills/"+ billID + ".json";
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
function serchBillsWithAPI() {
    var searchquery = document.getElementById("searchbutton").value;

    if (searchquery.length != 0){
        var url="https://api.propublica.org/congress/v1/bills/search.json?query=" + searchquery;
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
    getUpcomingBills();
    translate("This text will be translated"); 
}