fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((value) => {
    let op = document.getElementById("api");
    let bp = `<table>
    <thead>
   <tr>
   <th>ID</th>
     <th>Name</th>
     <th>Username</th>
     <th>Email</th>
     <th>Phone</th>
     <th>City</th>
     <th>Company</th>
     <th>Zip Code</th>
     <th>Latitude</th>
     <th>Longitude</th>
     </tr>
    </thead>
    <tbody>
    ${value.map((values) => {
      return `<tr>
      <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.phone}</td>
        <td>${values.address.city}</td>
        <td>${values.company.name}</td>
        <td>${values.address.zipcode}</td>
        <td>${values.address.geo.lat}</td>
        <td>${values.address.geo.lng}</td>
      </tr>
      `;
    })}
    </tbody>
    </table>`;
    let sp = bp.toString().replace(/,(?!["{}[\]])/g, "");
    op.style.textAlign = "center";
    op.innerHTML = sp;
  });
