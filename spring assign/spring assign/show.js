$(document).ready(function () {
  $("button").click(function () {
    $.ajax({
      type: "get",
      url: "http://localhost:9090/person/all",
      success: function (result) {
        console.log(result);
        result.forEach(function (value) {
          console.log(value);
          $("tbody").append(`
                        <tr>
                        <td>${value.name}</td>
                        <td>${value.age}</td>
                        <td>${value.address}</td>
                        </tr>
                        `);
        });
      },
      error: function (result) {
        console.log(result);
      },
    });
  });
});
