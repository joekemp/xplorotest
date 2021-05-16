import React from "react";

export const SpotifyLinks = (props) => (
  <div className="float-right">
    <a href="https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq" title="Open album online" target="_blank" rel="noreferrer">
      <img src="web.png" alt="web" className="ml-4 mr-1" />
    </a>
    <a href="spotify:album:1NAmidJlEaVgA3MpcPFYGq" title="Open album in Spotify">
      <img src="spotify.png" alt="spotify" className="mr-1 ml-1" />
    </a>
  </div>
);

export default SpotifyLinks;