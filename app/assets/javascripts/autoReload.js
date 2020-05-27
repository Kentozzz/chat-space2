$(function(){
  function buildHTML(message){
    var img = message.image ? `<img class="image" src="${message.image}">` : "" ;
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="messages__user-name">
            ${message.user_name}
          <div class="messages__user-name__date">
            ${message.created_at}
          </div>
        </div>
        <div class="messages__text">
          <div class="content">
            ${message.content}
          </div>
          ${img}
        </div>
      </div>`
      return html;
  }
  let reloadMessages = function() {
    let last_message_id = $('.MessageBox:last').data("message-id");
    console.log(last_message_id)
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        let insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };
  setInterval(reloadMessages, 7000);
});