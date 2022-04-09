// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function fetchPhotos(page = 1, searchTerm = "") {
  const url = "https://api.unsplash.com";
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  if (searchTerm) {
    const res = await fetch(
      `${url}/search/photos?client_id=${accessKey}&page=${page}&query=${searchTerm}`
    );
    const data = await res.json();

    return data.results;
  } else {
    const res = await fetch(
      `${url}/photos?client_id=${accessKey}&page=${page}`
    );
    const data = await res.json();

    return data;
  }
}
