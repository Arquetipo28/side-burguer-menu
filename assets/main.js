var $sideMenu = $('#side-menu')
$('#toggle-btn').click(() => {
  $sideMenu.toggleClass("side-open")
})

$(document).mouseup((e) => {
  if ((!$sideMenu.is(e.target)) && $sideMenu.has(e.target).length === 0)
  {
    $sideMenu.removeClass("side-open")
  }
});