export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=cyKkZWc0zZPCRtXYGYSU7zlGz0Sh17ws`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gift = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    };
  });
  console.log(data);
  return gift;
};
