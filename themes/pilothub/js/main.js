$(document).ready(function(){

  var w = $(window).width() - 30;
  $(".cntnr .content .portfolio-item .collage").width(w);
  $(window).resize(function(){
    var w = $(window).width() - 30;
    $(".cntnr .content .portfolio-item .collage").width(w);
  });

  $(".selected").each(function(){
  var $that = $(this),
    $selected_item = $that.find('li[selected="selected"]');
    if($selected_item.length){
      $selected_item.removeAttr('selected');
      $selected_item.attr('data-selected', 'selected');
    }

    $selected_item = $that.find('li[data-selected="selected"]');
    if($selected_item.length === 0){
      $selected_item = $that.find('li:first');
    }
    selected_value = $selected_item.attr('data-value');
    selected_title = $selected_item.html();
    if(selected_title == '' || selected_title == '---'){
      $that.find('li:first').html('Все');
      $that.find(".current").html($that.find(".current").attr('placeholder'));
      $that.find('input[type="text"]').val('');
    } else {
      $that.find(".current").html(selected_title);
      $that.find('input[type="text"]').val(selected_value);
    }
  });
  $(".selected .drop-list li").each(function(){
    if($(this).html() == '' || $(this).html() == '---'){
      $(this).html('Все');
    }
  });
  $(".selected .current").on("click", function(){
    if($(this).parent('.selected').find('li').length > 1){
      $(this).parent('.selected').toggleClass('open');
      $selected_item = $(this).parent('.selected').find('li[data-selected="selected"]');
      if($selected_item.attr('data-value') == '' || $selected_item.attr('data-value') == '0'){
        $selected_item.html('Все');
      }
    }
  });
  $(".drop-list li").on("click", function(){
    $(this).parents('.selected').removeClass('open');
  });
  $(".selected .drop-list li").on("click", function(){
    var $that = $(this),
        title = $that.html(),
        value = $that.attr('data-value'),
        $parent = $that.parents(".selected"),
        $current = $parent.find(".current"),
        $input = $parent.find('input[type="text"]');
    $current.html(title);
    $(".selected .drop-list li").removeAttr('data-selected');
    $that.attr('data-selected', 'selected');
    $input.val(value);
  });
  $(document).mouseup(function (e) {
    $(".selected").removeClass('open');
  });

  // $('html').click(function() {
  //   $("#m_menu").click();
  // });

  $(".m_menu-label").on("click", function(e){
    $("#m_menu").click();
    e.preventDefault();
  });

  $(".add_review").on("click", function(){
    var $that = $(".added_review");

    if($that.hasClass("active")){
      $that.removeClass("active");
      $(this).html("Добавить отзыв");
    }else{
      $that.addClass("active");
      $(this).html("Скрыть");
    }
  });

  $(".drop-list li").on("click", function(){
    var $elId = $($(this).attr("data-for"));

    $elId.prop("selected", true);
  });

  $(".show_btn").on("click", function(){
    var $elId = $($(this).data("hide-el-id"));

    if($elId.hasClass("show")){
      $elId.removeClass("show")
    }else{
      $elId.addClass("show")
    }
  });

  $(document).mouseup(function (e) {
    var container = $(".more-tags_wrap");
    if (container.has(e.target).length === 0){
        $(".more-tags_wrap input[type='checkbox']").prop("checked", false);
    }
    var container = $(".quick-block_call").parent();
    if (container.has(e.target).length === 0){
        $(".quick-block_call").parent().find("input[type='checkbox']").prop("checked", false);
    }
  });

  $(".tabs-cntrll .item, .tabs-block .tabs-cntrll label").on("click", function(){
    // if($(this).hasClass("active")){
    //   $(this).removeClass("active");
    // }else{
      $(this).parents(".tabs-cntrll").find(".item").removeClass("active");
      $(this).parents(".tabs-cntrll").find("label").removeClass("active");
      $(this).addClass("active");
    // }
  });

  $(".checked_btn").on("click", function(){
    var $that = $(this),
        $parent  = $that.parents("table"),
        num = $that.parent().index()+1;

    if($that.hasClass("active")){
      $parent.find(".checked_btn").addClass("active");
      $parent.find(".checked_btn").html("Сменить").removeClass("btn_blue").addClass("btn_green");
      $that.removeClass("active");

      $parent.find("td").addClass("disable");
      $parent.find("th").addClass("disable");
      $parent.find("td:nth-child("+num+")").removeClass("disable");
      $parent.find("th:nth-child("+num+")").removeClass("disable");

      $that.html("Выбрано").removeClass("btn_green").addClass("btn_blue")
    }
  });
  $(".m_checked_btn").on("click", function(){
    var $that = $(this),
        $parent  = $that.parents("tbody");

    $("table.default").find("td").addClass("disable");

    $parent.find("td").removeClass("disable");

    $(".m_checked_btn").html("Сменить").removeClass("btn_blue").addClass("btn_green");

    $that.html("Выбрано").removeClass("btn_green").addClass("btn_blue")
  });
  $(".switch .item").on("click", function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active")
    }else{
      $(this).parent().find(".item").removeClass("active")
      $(this).addClass("active")
    }
  });
  $(".cntnr .content .page_nav").each(function(){
    $(".cntnr .content .page_nav").scrollToFixed();
  });

  $(".autosize").each(function(){
    autosize(document.querySelectorAll('.autosize'));
  });

  $(".messenger-block").each(function(){
    var h = window.innerHeight - 145,
        mHBody = h - 230,
        dHBody = h - 80;

    $(".messenger-block .messenger").height(h);
    $(".messenger-block .chats-block").height(h);
    $(".messenger-block .chats-block .body").height(dHBody);
    $(".messenger-block .messenger .body").height(mHBody).scrollTop(999999999);

    $(window).on("resize", function(){
      var h = window.innerHeight - 145,
          mHBody = h - 230,
          dHBody = h - 80;

      $(".messenger-block .messenger").height(h);
      $(".messenger-block .chats-block").height(h);
      $(".messenger-block .chats-block .body").height(dHBody);
      $(".messenger-block .messenger .body").height(mHBody).scrollTop(999999999);

      // //------Временная заглушка, для просмотра диалогов, потом убери------//
      // if(window.innerWidth<<1024){
      //   $(".messenger-block .messenger .trigger").on("click", function(){
      //     $(".messenger-block .messenger").removeClass("active");
      //     $(".messenger-block .chats-block").addClass("active");
      //   });
      //   $(".messenger-block .chats-block .trigger").on("click", function(){
      //     $(".messenger-block .chats-block").removeClass("active");
      //     $(".messenger-block .messenger").addClass("active");
      //   });
      // }
    });
  });
  // //------Временная заглушка, для просмотра диалогов, потом убери------//
  // if(window.innerWidth<<1024){
  //   $(".messenger-block .messenger .trigger").on("click", function(){
  //     $(".messenger-block .messenger").removeClass("active");
  //     $(".messenger-block .chats-block").addClass("active");
  //   });
  //   $(".messenger-block .chats-block .trigger").on("click", function(){
  //     $(".messenger-block .chats-block").removeClass("active");
  //     $(".messenger-block .messenger").addClass("active");
  //   });
  // }
});
