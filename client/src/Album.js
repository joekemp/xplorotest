import React from "react";
import Card from 'react-bootstrap/Card';

export const Album = (props) => (
  <Card>
    <Card.Img variant="top" src="https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647" />
    <Card.Body>
      <div className="float-right">2019</div>
      <Card.Title>Lover</Card.Title>
      <div className="float-right">
        <a href="https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq" title="Open album online" target="_blank" rel="noreferrer">
          <img src="web.png" alt="web" className="ml-4 mr-1" />
        </a>
        <a href="spotify:album:1NAmidJlEaVgA3MpcPFYGq" title="Open album in Spotify">
          <img src="spotify.png" alt="spotify" className="mr-1 ml-1" />
        </a>
      </div>
      <Card.Subtitle>
        <a href="https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02">Taylor Swift</a>
      </Card.Subtitle>
    </Card.Body>
  </Card>
);

export default Album;