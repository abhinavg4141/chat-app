

socket.on('user-joined',function(userObject){
    let newDiv = document.createElement('div');
    newDiv.innerHTML = `${userObject.name} joined the chat`;
    newDiv.classList.add("join");

    chatContent.append(newDiv);
})


socket.on('user-msg',function(data){
    addNew('left',data);
    chatContent.scrollTop = chatContent.scrollHeight;
})

socket.on('user-leave',function(data){
    let div = document.createElement('div');
    div.classList.add('leave');

    div.innerHTML = `${data} leaved the chat`

    chatContent.append(div);
})


function addNew(direction,userObj){
    let chatDiv = document.createElement('div');
    chatDiv.classList.add('chat');
    chatDiv.classList.add(direction);

    let nameDiv = document.createElement('div');
    nameDiv.classList.add('chat-name');
    nameDiv.innerHTML = `${userObj.user}`;

    let textDiv = document.createElement('div');
    textDiv.classList.add('chat-text');
    textDiv.innerHTML = userObj.chatMsg;


    chatDiv.append(nameDiv);
    chatDiv.append(textDiv);
      
   chatContent.append(chatDiv);

}