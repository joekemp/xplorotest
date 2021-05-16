import React from "react";
import Card from 'react-bootstrap/Card';
import CardImage from "./CardImage";
import SpotifyLinks from "./SpotifyLinks";

export const Artist = (props) => {
  if (!props.artist) {
    return <div>Error: No artist property passed into Artist</div>
  }

  console.log(`Artist: ${JSON.stringify(props.artist, null, 2)}`);

  const artist = props.artist;
  const name = artist.name;
  const numFollowers = artist.followers.total;
  const genres = artist.genres.length ?
    artist.genres.join(", ") :
    <span className="font-italic text-center">No genres</span>;
  const popularity = artist.popularity;
  const link = artist.external_urls.spotify;

  return (
    <Card>
      <CardImage item={artist} />
      <Card.Body>
        <div className="float-right">
          {popularity}/100<br />
        </div>
        <Card.Title>
          <a href={link}>{name}</a>
        </Card.Title>
        <SpotifyLinks item={artist} />
        <Card.Subtitle>
          {numFollowers} followers
        </Card.Subtitle>
      </Card.Body>
      <Card.Footer>
        {genres}
      </Card.Footer>
    </Card>
  );
};

export default Artist;