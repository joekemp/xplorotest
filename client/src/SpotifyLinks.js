import React from "react";

export const SpotifyLinks = (props) => {
  const item = props.item;
  if (!item ||
      !item.external_urls ||
      !item.external_urls.spotify ||
      !item.uri) {
    return <div>Error: No album property passed into SpotifyLinks</div>
  }

  const webLink = item.external_urls.spotify;
  const spotifyLink = item.uri;

  return (
    <div className="float-right">
      <a href={webLink} title="Open online" target="_blank" rel="noreferrer">
        <img src="web.png" alt="web" className="ml-4 mr-1" />
      </a>
      <a href={spotifyLink} title="Open in Spotify">
        <img src="spotify.png" alt="spotify" className="mr-1 ml-1" />
      </a>
    </div>
  )
};

export default SpotifyLinks;