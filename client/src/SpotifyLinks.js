import React from "react";

export const SpotifyLinks = (props) => {
  if (!props.album ||
      !props.album.external_urls ||
      !props.album.external_urls.spotify ||
      !props.album.uri) {
    return <div>Error: No album property passed into SpotifyLinks</div>
  }

  const webLink = props.album.external_urls.spotify;
  const spotifyLink = props.album.uri;

  return (
    <div className="float-right">
      <a href={webLink} title="Open album online" target="_blank" rel="noreferrer">
        <img src="web.png" alt="web" className="ml-4 mr-1" />
      </a>
      <a href={spotifyLink} title="Open album in Spotify">
        <img src="spotify.png" alt="spotify" className="mr-1 ml-1" />
      </a>
    </div>
  )
};

export default SpotifyLinks;