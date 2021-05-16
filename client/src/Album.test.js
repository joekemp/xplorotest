import React from "react";
import {shallow} from 'enzyme';
import Album from "./Album";
import Card from 'react-bootstrap/Card';
import SpotifyLinks from "./SpotifyLinks";

describe("Tests Album component", () => {

  it("contains the right number of components", () => {
    const wrapper = shallow(<Album album={albumTaylorSwitftLover} />);
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(Card.Img)).toHaveLength(1);
    expect(wrapper.find(Card.Body)).toHaveLength(1);
    expect(wrapper.find(Card.Title)).toHaveLength(1);
    expect(wrapper.find(Card.Subtitle)).toHaveLength(1);
    expect(wrapper.find(SpotifyLinks)).toHaveLength(1);
  });

});


//
// Test input data
//

const albumTaylorSwitftLover = {
  album_type: "album",
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
      },
      href: "https://api.spotify.com/v1/artists/06HL4z0CvFAxyc27GXpf02",
      id: "06HL4z0CvFAxyc27GXpf02",
      name: "Taylor Swift",
      type: "artist",
      uri: "spotify:artist:06HL4z0CvFAxyc27GXpf02",
    },
  ],
  external_urls: {
    spotify: "https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq",
  },
  href: "https://api.spotify.com/v1/albums/1NAmidJlEaVgA3MpcPFYGq",
  id: "1NAmidJlEaVgA3MpcPFYGq",
  images: [
    {
      height: 640,
      url: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
      width: 640,
    },
    {
      height: 300,
      url: "https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647",
      width: 300,
    },
    {
      height: 64,
      url: "https://i.scdn.co/image/ab67616d00004851e787cffec20aa2a396a61647",
      width: 64,
    },
  ],
  name: "Lover",
  release_date: "2019-08-23",
  release_date_precision: "day",
  total_tracks: 18,
  type: "album",
  uri: "spotify:album:1NAmidJlEaVgA3MpcPFYGq",
};
