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
});
