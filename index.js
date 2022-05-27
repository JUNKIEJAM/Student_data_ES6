async function submit() {

    let id = await new Promise(resolve => wrapper(resolve, 'ID'));

    let formData = new FormData();
    
    formData.append("ID", "admin");
    formData.append("password","admin");

    let response = await fetch('', {
      method: 'POST',
      body: formData
    });

    let result = await response.json();
 //   alert(result.message);
  }


  var flag=false;

const startTime = new Date().getTime();

const interval = setInterval(function() {

    if (new Date().getTime() - startTime > 300000) {
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
        
       

        if(!flag){
        student.innerHTML+=`<tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Course</th>
        <th>Branch</th>
        <th>Phone No</th>
        <th>E-Mail ID</th>
       </tr>`
       
       flag=true;
        }

        for (let i = 0; i < data.length; i++) {
        
            
          student.innerHTML+= `<tr>
          <td> ${ data[i].ROLL_NO } </td>
          <td> ${data[i].NAME} </td>
          <td>  ${data[i].COURSE}</td>
          <td>  ${data[i].BRANCH}   </td> 
          <td>  ${data[i].CONTACT}   </td> 
          <td>  ${data[i].E_MAIL}   </td>
          </tr>`;
          
          
        }
        mainContainer.appendChild(student);
        
    }

}, 60000);

