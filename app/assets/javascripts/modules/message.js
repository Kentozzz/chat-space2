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
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messages').append(html);
      console.log(html)
      $('form')[0].reset();
      $('.box').animate({'height' : '200px'});
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    });
    .always(function(){
      $(".submit-btn").removeAttr("disabled");
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
  })
});