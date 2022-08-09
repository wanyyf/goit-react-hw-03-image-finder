const dataApi = ({ page, photosName }) => {
  const API_KEY = '28591679-2423d3506d277a146306c6fa4';
  const searchParams = new URLSearchParams({
    q: photosName,
    page: page,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });
  return fetch(`https://pixabay.com/api/?${searchParams}`);
};

const api = { dataApi };

export default api;
