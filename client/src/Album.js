import React from "react";
import Card from 'react-bootstrap/Card';
import CardImage from "./CardImage";
import SpotifyLinks from "./SpotifyLinks";

export const Album = (props) => {
  if (!props.album) {
    return <div>Error: No album property passed into Album</div>
  }
  const album = props.album;
  const title = album.name;
  const releaseYear = album.release_date.substring(0, 4);
  const artist = album.artists[0];
  const artistName = artist.name;
  const artistLink = artist.external_urls.spotify;

  return (
    <Card>
      <CardImage item={album} />
      <Card.Body>
        <div className="float-right">{releaseYear}</div>
        <Card.Title>{title}</Card.Title>
        <SpotifyLinks item={album} />
        <Card.Subtitle>
          <a href={artistLink}>{artistName}</a>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Album;