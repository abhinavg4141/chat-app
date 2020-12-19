

{/* <div class="chat right">
    <div class="chat-name">Steve</div>
    <div class="chat-text">I can do this all day</div>
</div> */}

let sendButton = document.querySelector('.send');
let message = document.querySelector('#message');
let chatContent = document.querySelector('.chat-content');
let joinButton = document.querySelector('.join-button');
let container = document.querySelector('.container');
let newUserDiv = document.querySelector('.new-user');
let username = document.querySelector('#username');
let emoji = document.querySelector(".icons");
let emoticons = document.querySelector(".emojis");
let allEmotes = document.querySelectorAll(".rows p");

let user;
joinButton.addEventListener('click',function(){
   if(username.value){
      user = username.value;
      container.classList.remove('hide');
      newUserDiv.classList.add('hide');

      socket.emit('user',username.value);
   }
})


sendButton.addEventListener('click',function(){
    let chatMsg = message.value;
   if(chatMsg){
      socket.emit('msg',{user,chatMsg});
      addNew('right',{user,chatMsg});
      message.value = '';
      chatContent.scrollTop = chatContent.scrollHeight;
   }

})

emoji.addEventListener("click",function(){
   if(emoticons.classList.contains("hide")){
      emoticons.classList.remove("hide");
   }else{
      emoticons.classList.add("hide");
   }
})


for(let i=0;i<allEmotes.length;i++){
 allEmotes[i].addEventListener('click',function(){
    message.value = `${message.value}${allEmotes[i].innerHTML}`;
    emoticons.classList.add("hide");
 })
}