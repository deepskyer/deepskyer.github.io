var timelimit;
var id;

fetch('https://floating-bastion-48526.herokuapp.com/api/tasks/')
    .then(res => res.json())
    .then(result  => {
        for (let index = 0; index < result.length; index++) {
            const website = result[index];
            if(website.title == 'youtube'){
                timelimit = website.content;
                id = website._id;
                break;
            } 
        }
    
    })

function allow(){

  var options =  document.getElementById("timeLimit")
  var time = options.options[options.selectedIndex].value;
  fetch(
    "https://floating-bastion-48526.herokuapp.com/api/tasks/" + id,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: 'youtube',
        content: time,
        rating: 2
      })
    })
    alert("Allow to watch " + time + " mins.");
}

function disable(){
    console.log("id is: " + id + " and time limit is " + timelimit);
    fetch(
        "https://floating-bastion-48526.herokuapp.com/api/tasks/" + id,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            title: 'youtube',
            content: 0,
            rating: 3
          })
        })
alert("Youtube has been disabled.")
  }