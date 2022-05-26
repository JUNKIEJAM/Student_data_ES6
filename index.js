const startTime = new Date().getTime();

const interval = setInterval(function() {

    if (new Date().getTime() - startTime > 30000) {
        clearInterval(interval);
        return;
    }

    fetch('data.json')

    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
            appendData(data);
        })

    .catch(function(err) {
            console.log('error:' + err);
        });


    function appendData(data) {

        var mainContainer = document.getElementById("myData");
        let student = document.createElement('table');
        

        for (let i = 0; i < data.length; i++) {

        
          student.innerHTML+= `<tr><td> ${ data[i].ROLL_NO } </td><td> ${data[i].NAME} </td> <td>  ${data[i].COURSE}   </td> <td>  ${data[i].BRANCH}   </td> <td>  ${data[i].CONTACT}   </td> <td>  ${data[i].E_MAIL}   </td></tr>`
          
          
        }
        mainContainer.appendChild(student);
    }

}, 5000);