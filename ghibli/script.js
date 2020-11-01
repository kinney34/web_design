const ghibli_url = 'https://ghibliapi.herokuapp.com';
const tmdb_url = 'https://api.themoviedb.org/3';
const tmdb_image_url = 'https://image.tmdb.org/t/p/w185';
const tmdb_key = '83818d35ef2a5b55a42568972bb25f7b';

$(document).ready(function() {

  $.get(ghibli_url + '/films', function(data, status) {
    let titles = '';
    data.forEach(function(element) {
      let newTitle = `<li><a class='titleLink' id=${element.id} href='#'>${element.title}</a></li>`;
      titles += newTitle;
    });
    $('.titleList, .display-title-list').html(titles);
  });

  $('.menu-open').click(function() {
    $('.menu').animate({ height: '100vh' });
  });

  $('#menu-close').click(function() {
    $('.menu').animate({ height: '0' });
  });

  $('#home-nav, #nav-logo').click(function() {
    $('.container').addClass('visible');
    $('.display-container').removeClass('visible');
    $('.menu').animate({ height: '0' });
  });

  $('.titleList, .display-title-list').click(function(e) {
    let details = '';
    let title = '';
    let year = '';
    if (e.target.tagName == 'A') {
      $.get(`${ghibli_url}/films/${e.target.id}`, function(data, status) {
        title = data.title;
        year = data.release_date;
        $('.display-title').html(`<h1>${title}</h1><br>`);
        details += `<h4>${year} <span>&#183;</span> ${data.rt_score}%</h4>`
        details += `<h4>Director: ${data.director}</h4>`;
        details += `<h4>Producer: ${data.producer}</h4>`;
        $('.detail-box').html(details);
        $('.description').html(`${data.description}<br>`);

        $.get(tmdb_url + '/search/movie', {api_key: tmdb_key, query: title, year: year}, function(initial_data, status) {
          $.get(`${tmdb_url}/movie/${initial_data.results[0].id}/images`, {api_key: tmdb_key}, function(data, status) {
            let width = 400 * data.posters[0].aspect_ratio;
            let poster_path = tmdb_image_url + data.posters[0].file_path;
            $('.poster').css({'background-image': `url(${poster_path})`, 'width': `${width}px`});
          });
        });
      });
    }

    $('.display-container').addClass('visible');
    $('.container').removeClass('visible');
    $('.menu').animate({ height: '0' });
  });
});
