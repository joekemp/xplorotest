import React from "react";
import Card from 'react-bootstrap/Card';
import SpotifyLinks from "./SpotifyLinks";

export const Album = (props) => {
  if (!props.album) {
    return <div>Error: No album property passed into Album</div>
  }
  const album = props.album;
  const title = album.name;
  const releaseYear = album.release_date.substring(0, 4);
  const image = album.images[1].url;
  const artist = album.artists[0];
  const artistName = artist.name;
  const artistLink = artist.external_urls.spotify;

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <div className="float-right">{releaseYear}</div>
        <Card.Title>{title}</Card.Title>
        <SpotifyLinks album={album} />
        <Card.Subtitle>
          <a href={artistLink}>{artistName}</a>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Album;