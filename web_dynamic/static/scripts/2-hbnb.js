// const url = 'http://0.0.0.0:5001/api/v1/status/'
const url = 'http://54.87.4.219:49915/api/v1/status/';

$(document).ready(() => {
  const checkedAmenities = {};

  $('input').change(function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');
    const checked = $(this).is(':checked');
    checkedAmenities[amenityId] = (checked && amenityName) || null;

    const selected = `${Object.values(checkedAmenities).filter((el) => el !== null).join(', ')}`;
    $('.amenities h4').text(selected);
  });

  $.get(url, function (data) {
    const cls = 'available';
    const apiStatus = $('div#api_status');
    if (data.status === 'OK') { apiStatus.addClass(cls); } else { apiStatus.removeClass(cls); }
  });
});
