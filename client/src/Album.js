import React from "react";
import Card from 'react-bootstrap/Card';
import SpotifyLinks from "./SpotifyLinks";

export const Album = (props) => (
  <Card>
    <Card.Img variant="top" src="https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647" />
    <Card.Body>
      <div className="float-right">2019</div>
      <Card.Title>Lover</Card.Title>
      <SpotifyLinks />
      <Card.Subtitle>
        <a href="https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02">Taylor Swift</a>
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

export default Album;