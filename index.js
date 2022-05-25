
const startTime = new Date().getTime();

const interval = setInterval(function() {
    
    if(new Date().getTime() - startTime > 30000){
        clearInterval(interval);
        return;
    }
  
fetch('data.json')
       
.then(function (response) {
                return response.json();
            })

            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error:'+err);
            });


        function appendData(data) {
         
            var mainContainer = document.getElementById("myData");
         
            for (var i = 0; i < data.length; i++) {
         
                var student = document.createElement('div');
  
                student.innerHTML += '<tr>';

                student.innerHTML+=  `<td>  ${data[i].ROLL_NO}   </td>`

                  student.innerHTML+=  `<td>  ${data[i].NAME}   </td>`

                  student.innerHTML+=  `<td>  ${data[i].COURSE}   </td>`

                  student.innerHTML+=  `<td>  ${data[i].BRANCH}   </td>`

                  student.innerHTML+=  `<td>  ${data[i].CONTACT}   </td>`

                  student.innerHTML+=  `<td>  ${data[i].E_MAIL}   </td>`

                 

                mainContainer.appendChild(student);

               
            }
          
        }
       
    }, 5000);
