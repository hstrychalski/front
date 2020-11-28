$(document).ready(function() {

    const TABLE_ID = 'example';
    const DATA_SOURCE_URL = '/alert';

    function initDataTable()
    {

        $('#example tfoot th').each( function () {
            var title = $(this).text();
            $(this).html( '<input type="text" id="input-' + title + '" ' + 'placeholder="Search '+ title +'" />' );
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
                    });

                });
            },
            "paging": false
        });


        $('#input-Score').hide();
        $('#input-Link').hide();
    }


    function fetchJson()
    {
        return fetch(DATA_SOURCE_URL)
            .then(
                response => response.json()
            );
    }

    function insertCompanyTableRow(company) {
        let table = document.getElementById(TABLE_ID);
        let tbody = table.children[1];
        let row = tbody.insertRow();

        let nameCell = row.insertCell();
        let nameTextNode = document.createTextNode(JSON.stringify(company.details));
        nameCell.appendChild(nameTextNode);

        let scoreCell = row.insertCell();
        let scoreTextNode = document.createTextNode(company.score);
        scoreCell.appendChild(scoreTextNode);

        let linkCell = row.insertCell();
        let link = document.createElement("a");
        link.setAttribute("href", company.url);
        let linkText = document.createTextNode(company.url);
        link.appendChild(linkText);
        linkCell.appendChild(link);

        let descriptionCell = row.insertCell();
        let descriptionCellNode = document.createTextNode(company.description);
        descriptionCell.appendChild(descriptionCellNode);

        let alertTypeCell = row.insertCell();
        let alertTypeCellNode = document.createTextNode(company.alertType);
        alertTypeCell.appendChild(alertTypeCellNode);

        let sourceCell = row.insertCell();
        let sourceCellNode = document.createTextNode(company.source);
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
