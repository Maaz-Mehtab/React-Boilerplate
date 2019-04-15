component inside work 


RunProgram() {
    let obj = {
      script: "<?php echo \"hello world\";",
      language: "php",
      versionIndex: "0",
      clientId: "48633bf1e7aa667f621878fd88038424",
      clientSecret: "4c54ad3378fd505be7fa6932bd89eeb210c878018b20238e0e9279ff72ed29c6"
    }

    axios.post('https://api.jdoodle.com/execute',obj)
    .then(result => {
        
        console.log("res program", result)
    })

  }

