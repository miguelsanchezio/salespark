function initMap() {
  const loc = { lat: 40.7484, lng: -73.9857 };

  const map = new google.maps.Map(document.querySelector('.map')
  , {
    zoom: 14,
    center: loc
  });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

$('#navbar a, .btn').on('click', function(e) {
  if (this.hash !== '') {
    // e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      500
    );
  }
});

window.addEventListener('scroll', function() {
  if(window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

