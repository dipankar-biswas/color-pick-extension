let dataDisplay = document.querySelector('.dataDisplay');
let msg = document.querySelector('.ex-wrapper .msg');
msg.innerHTML = 'Loading...';

fetch('http://localhost:3000/colors')
.then((response) => response.json())
.then((data) => {
    if(data.length > 0){
        msg.innerHTML = '';
        msg.classList.remove = 'show';
        // Extract the last 10 items from the data
        const last10Items = data.slice(-20);
    
        last10Items.forEach((item) => {
            // Create a list item element
            const listItem = document.createElement('li');
            listItem.classList.add( "item" );
          
            // Create and set the content for the list item
            const content = document.createElement('div');
            content.classList.add( "color" );
            content.innerHTML = `<span style="background:${item.code};width:16px;height:16px;display:block;border-radius:50%"></span><span>${item.name}</span>`;
          
            // Append the content to the list item
            listItem.appendChild(content);
          
            // Append the list item to the ul element
            dataDisplay.appendChild(listItem);
        });
    }else{
        msg.innerHTML = 'Color Not Found!!';
        msg.classList.add = 'show';
    }
})
.catch((error) => {
    console.error('Error fetching data:', error);
});

