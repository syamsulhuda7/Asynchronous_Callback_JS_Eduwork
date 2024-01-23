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

    const tbody = document.getElementById("myTableBody");

    data.forEach(e => {

        let row = tbody.insertRow();

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerHTML = e.id;
        cell2.innerHTML = e.name;
        cell3.innerHTML = e.username;
        cell4.innerHTML = e.email;
        cell5.innerHTML = [`${e.address.street}, ${e.address.suite}, ${e.address.city}`];
        cell6.innerHTML = e.company.name;

    });
});