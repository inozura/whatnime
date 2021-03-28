export const getAiringAnime = async () => {
  try {
    const data = await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming");
    return data.json();
  } catch (err) {
    console.log(err);
  }
};

export const getDetailAnime = async (id) => {
  try {
    const data = await fetch(`https://api.jikan.moe/v3/anime/${id}`);
    return data.json();
  } catch (err) {
    console.log(err);
  }
};

export const getCharaList = async (id) => {
  try {
    const data = await fetch(
      `https://api.jikan.moe/v3/anime/${id}/characters_staff`
    );
    return data.json();
  } catch (err) {
    console.log(err);
  }
};
