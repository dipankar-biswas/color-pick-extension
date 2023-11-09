// Get Color Ar Por Theke Suru Hobe
// 8A9A5B







// const startServerButton = document.getElementById('startServerButton');

// startServerButton.addEventListener('click', () => {
//   runCommand();
// });


// function runCommand() {
//   console.log('SGOj');
//   alert('Omk')
//   let scriptContainer = document.querySelector('body');
//   let script = document.createElement('script');
//   script.setAttribute( "type","module" );
//   script.src = 'command.js'; // Replace with the path to your JavaScript file
//   scriptContainer.appendChild(script);
// }
// cp.exec('start chrome');
// cp.exec('npx json-server --watch db.json');

// execFile('./command.sh', (error, stdout, stderr) => {
//   if (error) {
//     console.error('Error starting JSON Server:', error);
//     return;
//   }
//   if (stderr) {
//     console.error('JSON Server stderr:', stderr);
//     return;
//   }
//   console.log('JSON Server is running:', stdout);
//   get20Datas();
// });



get20Datas();
function get20Datas(){
  let dataDisplay = document.querySelector('.dataDisplay');
  let msg = document.querySelector('.ex-wrapper .msg');
  msg.innerHTML = 'Loading...';
  msg.classList.add('show');
  fetch('http://localhost:3000/colors')
  .then((response) => response.json())
  .then((data) => {
      if(data.length > 0){
          msg.innerHTML = '';
          msg.classList.remove('show');
          dataDisplay.classList.add('show');
          // Extract the last 10 items from the data
          const last10Items = data.slice(-20);
      
          last10Items.forEach((item) => {
              // Create a list item element
              const listItem = document.createElement('li');
              listItem.classList.add( "item" );
            
              // Create and set the content for the list item
              const content = document.createElement('div');
              content.classList.add( "color" );
              content.innerHTML = `<span class="code" style="background:${item.code}"></span><span class="name">${item.name}</span>`;
            
              // Append the content to the list item
              listItem.appendChild(content);
            
              // Append the list item to the ul element
              dataDisplay.appendChild(listItem);
          });
      }else{
          msg.innerHTML = 'Color Not Found!!';
          msg.classList.add('show');
          dataDisplay.classList.remove('show');
      }
  })
}
  