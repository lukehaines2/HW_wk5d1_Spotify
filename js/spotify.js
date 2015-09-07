$(document).ready(function() {
  console.log('ding dong');

  // GLOBAL VARIABLES
  var searchInput = $('#search-area')
  var searchOption = $('#search-option');
  var results = $('#results');

  searchOption.on('change', getSearch);
  // submitButton.on('click', getSearch);

  function getSearch(e) {

  $.get('https://api.spotify.com/v1/search?q=' + searchInput.val() + '&type=' + searchOption.val(), function(output) {
      console.log(output)
      results.empty() 
    
      var dropdown2 = searchOption.val() + 's';

      $.each(output[dropdown2].items, function(index, dropdown2) {
        var result = $("<div id='results'>" + dropdown2.name + "</div>");
        results.append(result);
        searchOption.get(0).selectedIndex = 0;
        
        // ATTEMPTING THE MP3 URL PLAY
        var previewUrl = dropdown2.preview_url;
        if searchOption.val() === 'track' {
          <audio src="/test/audio.ogg">
        <p>Your browser does not support the <code>audio</code> element.</p>
        </audio>
        previewUrl
        
        }
        console.log(previewUrl);
        })
      })
    }
});

// move global variables




