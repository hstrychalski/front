/**
 * Sorts a HTML table.
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting will be in ascending
 */
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    if (headerCell.childNodes[0].data === 'Score') {
        headerCell.addEventListener("click", () => {
            const tableElement = headerCell.parentElement.parentElement.parentElement;
            const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
            const currentIsAscending = headerCell.classList.contains("th-sort-asc");

            sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
        });
    }
});

function fetchJson()
{
    let json = [
        {
            "enhanced_info": null,
            "jurisdiction": "CzechRepublic",
            "link": "https://www.cnb.cz/en/supervision-financial-market/consumer-protection-and-financial-literacy/consumer-protection/notices-about-activities/Notice-about-the-activities-of-COOPER-MARKETS-s.r.o./",
            "name": "COOPER MARKETS s.r.o ",
            "regulator": "Czech National Bank",
            "whois": {
                "creation_date": "1997-03-06 01:00:00",
                "domain_name": "cnb.cz",
                "expiration_date": "2024-10-10 00:00:00",
                "name_servers": [
                    "tm0.cnb.cz (89.233.135.60, 2001:b80:a0:2e::53)",
                    "tm1.cnb.cz (195.144.124.2, 2001:af0:f:ffdb::53)"
                ],
                "registrant_name": "SB:TM358-RIPE_XX",
                "registrar": "REG-CZNIC",
                "updated_date": [
                    "2020-04-04 08:27:05",
                    "2018-05-15 21:32:00",
                    "2020-03-31 14:26:07"
                ]
            }
        },
        {
            "enhanced_info": {
                "address": "Dreik\u00f6nigstrasse 36, Z\u00fcrich",
                "website": "www.zurichmarkets.com"
            },
            "jurisdiction": "Switzerland",
            "link": "https://www.finma.ch/en/finma-public/warning-list/zurich-markets-limited/",
            "name": "Zurich Markets Limited ",
            "regulator": "Swiss Financial Market Supervisory Authority",
            "whois": {
                "creation_date": null,
                "dnssec": null,
                "domain_name": null,
                "name_servers": null,
                "registrant_address": null,
                "registrant_name": null,
                "registrar": null,
                "tech-c": null
            }
        },
        {
            "enhanced_info": {
                "address": "Route de Meyrin 267, 1217 Meyrin",
                "website": "www.inquot.net"
            },
            "jurisdiction": "Switzerland",
            "link": "https://www.finma.ch/en/finma-public/warning-list/inquot-investing-group/",
            "name": "Inquot Investing Group ",
            "regulator": "Swiss Financial Market Supervisory Authority",
            "whois": {
                "creation_date": null,
                "dnssec": null,
                "domain_name": null,
                "name_servers": null,
                "registrant_address": null,
                "registrant_name": null,
                "registrar": null,
                "tech-c": null
            }
        },
        {
            "enhanced_info": null,
            "jurisdiction": "Portugal",
            "link": "https://www.cmvm.pt/en/SDI/FinancialIntermediaries/Pages/20201126.aspx?v=",
            "name": "iAlphagroup",
            "regulator": "Comiss\u00c3\u00a3o do Mercado de Valores Mobili\u00c3\u00a1rios",
            "whois": {
                "admin": null,
                "admin_city": null,
                "admin_email": null,
                "admin_postal_code": null,
                "admin_street": null,
                "creation_date": null,
                "domain_name": null,
                "emails": null,
                "expiration_date": null,
                "name_servers": null,
                "registrant_city": null,
                "registrant_email": null,
                "registrant_name": null,
                "registrant_postal_code": null,
                "registrant_street": null,
                "status": null
            }
        },
        {
            "enhanced_info": {
                "address": "6-7 Lisle Street, London WC2H 7BG; Exchange House, 12 Primrose Street, London EC2A 2HS",
                "website": " www.novakpeter.com"
            },
            "jurisdiction": "UnitedKingdom",
            "link": "https://www.fca.org.uk/news/warnings/novak-peter-financial-advisors-solutions-clone-eea-authorised-firm",
            "name": "Novak Peter Financial Advisors & Solutions (Clone of EEA authorised firm) ",
            "regulator": "Financial Conduct Authority",
            "whois": {
                "creation_date": "2010-10-05 00:00:00",
                "domain_name": "fca.org.uk",
                "expiration_date": "2021-10-05 00:00:00",
                "name_servers": "ns.fjserv.net",
                "registrant_city": null,
                "registrant_country": null,
                "registrant_name": null,
                "registrant_street": null,
                "registrant_type": null,
                "registrar": "Fujitsu Services Ltd [Tag = ICLNET]",
                "registrar_url": "http://www.fjserv.net/FujitsuDomains.html",
                "status": "Registered until expiry date.",
                "updated_date": "2019-08-19 00:00:00"
            }
        },
        {
            "enhanced_info": {
                "address": "6-7 Lisle Street, London WC2H 7BG; Exchange House, 12 Primrose Street, London EC2A 2HS",
                "website": " www.novakpeter.com"
            },
            "jurisdiction": "UnitedKingdom",
            "link": "https://www.fca.org.uk/news/warnings/novak-peter-financial-advisors-solutions-clone-eea-authorised-firm",
            "name": "Novak Peter Financial Advisors & Solutions (Clone of EEA authorised firm) ",
            "regulator": "Financial Conduct Authority",
            "whois": {
                "creation_date": "2010-10-05 00:00:00",
                "domain_name": "fca.org.uk",
                "expiration_date": "2021-10-05 00:00:00",
                "name_servers": "ns.fjserv.net",
                "registrant_city": null,
                "registrant_country": null,
                "registrant_name": null,
                "registrant_street": null,
                "registrant_type": null,
                "registrar": "Fujitsu Services Ltd [Tag = ICLNET]",
                "registrar_url": "http://www.fjserv.net/FujitsuDomains.html",
                "status": "Registered until expiry date.",
                "updated_date": "2019-08-19 00:00:00"
            }
        }
        ];
    return json;
}

function renderData(companies) {
    clearTable();
    let i =0;
    companies.forEach(function(company){
        company.score = i++;
        insertCompanyTableRow(company);
    })
}

function insertCompanyTableRow(company) {
    let table = document.getElementById("table-companies");
    let tbody = table.children[1];
    let row = tbody.insertRow();

    let nameCell = row.insertCell();
    let nameTextNode = document.createTextNode(company.name);
    nameCell.appendChild(nameTextNode);

    let scoreCell = row.insertCell();
    let scoreTextNode = document.createTextNode(company.score);
    scoreCell.appendChild(scoreTextNode);

    let linkCell = row.insertCell();
    let link = document.createElement("a");
    link.setAttribute("href", company.link);
    let linkText = document.createTextNode(company.link);
    link.appendChild(linkText);
    linkCell.appendChild(link);
}

function clearTable() {
    let table = document.getElementById("table-companies");
    let tbody = table.children[1];
    tbody.innerHTML = "";
}

window.onload = function() {
    let json = fetchJson();
    renderData(json)
}
