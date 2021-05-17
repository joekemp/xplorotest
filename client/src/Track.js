import React from "react";
import Card from 'react-bootstrap/Card';
import CardImage from "./CardImage";
import TrackDuration from "./TrackDuration";
import SpotifyLinks from "./SpotifyLinks";
import ArtistList from "./ArtistList";

export const Track = (props) => {
  if (!props.track) {
    return <div>Error: No track property passed into Track</div>
  }

  console.log(`Track: ${JSON.stringify(props.track, null, 2)}`);

  const track = props.track;
  const name = track.name;
  const border = track.explicit ? "danger" : "";

  return (
    <Card border={border}>
      <CardImage item={track.album} />
      <Card.Body>
        <TrackDuration duration={track.duration_ms} />
        <Card.Title>{name}</Card.Title>
        <SpotifyLinks item={track} />
        <Card.Subtitle>
          <ArtistList artists={track.artists} />
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default Track;