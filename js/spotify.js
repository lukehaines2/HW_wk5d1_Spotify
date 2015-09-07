$(document).ready(function() {
  console.log('ding dong');

  // GLOBAL VARIABLES
  var searchInput = $('#search-area')
  var searchOption = $('#search-option');
  var results = $('#results');

  searchOption.on('change', getSearch);
  submitButton.on('click', getSearch);

  function getSearch(e) {
    
  $.get('https://api.spotify.com/v1/search?q=coldplay&type=artist' + searchInput.val + '&type'
  };
});


