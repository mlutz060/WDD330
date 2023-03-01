async function login(){
  await fetch('http://server-nodejs.cit.byui.edu:3000/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: `{
      
    }`
  })
}

