const hello = () => {
    function getData(url, cb) {
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status === 200) {
                return cb(JSON.parse(xhr.responseText));
            }
        };
        xhr.open("GET", url);
        xhr.send();
    }
    const data = getData("https://jsonplaceholder.typicode.com/users", function (data) {

        const table = document.getElementById("table");
        const grid = new gridjs.Grid({
            columns: ["Id", "Name", "Username", "Email", "Address"],
            data: [
                [`${data[0].id}`, `${data[0].name}`, `${data[0].username}`, `${data[0].email}`, `${data[0].address.city}`],
                [`${data[1].id}`, `${data[1].name}`, `${data[1].username}`, `${data[1].email}`, `${data[1].address.city}`],
                [`${data[2].id}`, `${data[2].name}`, `${data[2].username}`, `${data[2].email}`, `${data[2].address.city}`],
                [`${data[3].id}`, `${data[3].name}`, `${data[3].username}`, `${data[3].email}`, `${data[3].address.city}`],
                [`${data[4].id}`, `${data[4].name}`, `${data[4].username}`, `${data[4].email}`, `${data[4].address.city}`],
                [`${data[5].id}`, `${data[5].name}`, `${data[5].username}`, `${data[5].email}`, `${data[5].address.city}`],
                [`${data[6].id}`, `${data[6].name}`, `${data[6].username}`, `${data[6].email}`, `${data[6].address.city}`],
                [`${data[7].id}`, `${data[7].name}`, `${data[7].username}`, `${data[7].email}`, `${data[7].address.city}`],
                [`${data[8].id}`, `${data[8].name}`, `${data[8].username}`, `${data[8].email}`, `${data[8].address.city}`],
                [`${data[9].id}`, `${data[9].name}`, `${data[9].username}`, `${data[9].email}`, `${data[9].address.city}`],
            ],
            // data.forEach(e => {
            // [`${e.id}`, `${e.name}`, `${e.username}`, `${e.email}`, `${e.address.city}`]
            // }),

            search: {
                enabled: true
            },
            sort: true,
            pagination: {
                limit: 5
            },
            style: {
                td: {
                    border: '1px solid #ccc'
                },
                table: {
                    'font-size': '20px'
                }
            }
        });

        grid.render(table);
    }
    );

};


export { hello };