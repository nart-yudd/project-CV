
$(document).ready(function(){
  $(".tab-content .film-box:not(:first-child)").hide()
  $("ul.tab a").click(function(){
      event.preventDefault()
      $("ul.tab a").removeClass("active ")
      $(this).addClass("active")
      
      var tab = $(this).attr("href")
      $(".tab-content .film-box").hide()
      $(tab).show()
  })
})
const infomation = document.querySelector('#info')
function showinfo(){
  alert("Nếu bạn có ý kiến đóng góp cho web thì hãy lướt xuống và làm theo hướng dẫn ở phần cuối của trang, cảm ơn bạn. ")
}
infomation.addEventListener('click', showinfo)
const bTns = document.querySelectorAll('#js-login')
const modal = document.querySelector('.modal.js-modal')
const modalClose = document.querySelector('.js-close')
function hideTable() {
    modal.classList.remove('open')
}
function showTable() {
   modal.classList.add('open')
}
for(const bTn of bTns){
    bTn.addEventListener('click',showTable)
}

$(document).ready(function() {
  $(".toggle").click(function() {
    console.log("clicked");
    $(".expandable_content").toggleClass("active");
    $(".toggle").toggleClass("active");
  });
});
var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        videoId: 'DobBbl0_6Lc'

      });
    }
    
    $(document).on('mouseover', '#player', function() {
      player.playVideo();
    });
    $(document).on('mouseout', '#player', function() {
      player.pauseVideo();
    });
    modalClose.addEventListener('click',hideTable)
    $(document).ready(function(){
      $(".tab-content .comment-base:not(:first-child)").hide()
      $("ul.tab a").click(function(){
          $("ul.tab a").removeClass("active")
          $(this).addClass("active")
          var tab = $(this).attr("href")
          $(".tab-content .comment-base").hide()
          $(tab).show()
      })
    })