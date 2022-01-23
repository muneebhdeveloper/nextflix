// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=netflix%20trailer&key=${YOUTUBE_API_KEY}`
  );

  let fetchedVideos = await response.json();

  let videos = fetchedVideos.items.map((item) => {
    return {
      title: item.snippet.title,
      description: item.snippet.description,
      imgURL: item.snippet.thumbnails.high.url,
    };
  });

  res.status(200).json({ data: videos });
}
