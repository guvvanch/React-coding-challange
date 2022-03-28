// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function initialFetch() {
  const url = "https://api.unsplash.com";
  const accessKey = process.env.REACT_APP_ACCESS_KEY;
  const res = await fetch(
    `${url}/photos/random?client_id=${accessKey}&count=15`
  );
  const data = await res.json();

  return data;
}

export async function fetchMore() {
  const url = "https://api.unsplash.com";
  const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const res = await fetch(
    `${url}/photos/random?client_id=${accessKey}&count=15`
  );
  const data = await res.json();

  return data;
}
