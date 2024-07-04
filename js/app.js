const unReadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("notifications");
const markAll = document.getElementById("mark-all");
unread.innerText = unReadMessages.length
console.log(unReadMessages);
console.log(unread);


unReadMessages.forEach((message) => {
    message.addEventListener("click" , () =>{
        message.classList.remove("unread");
        const newUnread = document.querySelectorAll(".unread");
        unread.innerText = newUnread.length;
    }) 
});

markAll.addEventListener("click" , () =>{
    unReadMessages.forEach((message) => {
          message.classList.remove("unread");
    })
    const newUnread = document.querySelectorAll(".unread");
    unread.innerText = newUnread.length;

})