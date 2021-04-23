function sendData(Username){
    axios.get('http://intelligentcanteen.000webhostapp.com/intell.php?name='+Username)
      .then(function(response){
        alert(response.data);
        navigation.navigate('Profile');
      })
      .catch(function(error){
        alert(error)
      });
  }
  function GetData(){
    axios({
      method:'post',
      url:'http://intelligentcanteen.000webhostapp.com/getdata.php',
      headers:{
        'Accept':'application/json'
      }
    })
      .then(function(response){
        response.data.forEach(element => {
          alert(element.id+"  "+element.name);
        });
      })
      .catch(function(error){
        alert(error)
      });
  }
  function getpythondata(){
    axios({
      method:'get',
      url:'http://fahadaminn1997.pythonanywhere.com/',
      // headers:{
      //   'Accept':'application/json'
      // }
    })
      .then(function(response){
        console.log(response);
        // response.data.forEach(element => {
        //   alert(element.id+"  "+element.name);
        // });
      })
      .catch(function(error){
        alert(error)
      });
  }