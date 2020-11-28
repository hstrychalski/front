$(document).ready(function() {

    const TABLE_ID = 'example';

    function initDataTable()
    {
        $('#example tfoot th').each( function () {
            var title = $(this).text();
            $(this).html( '<input type="text" placeholder="Search '+ title +'" />' );
        } );

        $('#example').DataTable({
            initComplete: function () {
                // Apply the search
                this.api().columns().every( function () {
                    var that = this;

                    $( 'input', this.footer() ).on( 'keyup change clear', function () {
                        if ( that.search() !== this.value ) {
                            that
                                .search( this.value )
                                .draw();
                        }
                    } );
                } );
            }
        });
    }

    function fetchJson()
    {
        return new Promise(function(resolve) {
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
                }
            ];
            resolve(json);
        })
    }

    function insertCompanyTableRow(company) {
        let table = document.getElementById(TABLE_ID);
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
        let linkText = document.createTextNode(company.name);
        link.appendChild(linkText);
        linkCell.appendChild(link);

        let descriptionCell = row.insertCell();
        let descriptionCellNode = document.createTextNode('Description placeholder');
        descriptionCell.appendChild(descriptionCellNode);

        let alertTypeCell = row.insertCell();
        let alertTypeCellNode = document.createTextNode('Alert type placeholder');
        alertTypeCell.appendChild(alertTypeCellNode);

        let sourceCell = row.insertCell();
        let sourceCellNode = document.createTextNode('Source placeholder');
        sourceCell.appendChild(sourceCellNode);
    }

    function clearTable() {
        let table = document.getElementById(TABLE_ID);
        let tbody = table.children[1];
        tbody.innerHTML = "";
    }

    function loadDataToTable()
    {
        clearTable()
        fetchJson()
            .then((companies) => {
                companies.forEach((company) => {
                    insertCompanyTableRow(company);
                })
            })
            .then(function() {
                initDataTable();
            });
    }

    loadDataToTable();
} );
