import React from "react";
import {shallow} from 'enzyme';
import Album from "./Album";
import Card from 'react-bootstrap/Card';
import SpotifyLinks from "./SpotifyLinks";

describe("Tests Album component", () => {

  it("contains the right number of components", () => {
    const wrapper = shallow(<Album album={albumTaylorSwiftLover} />);
    expect(wrapper.find(Card)).toHaveLength(1);
    expect(wrapper.find(Card.Img)).toHaveLength(1);
    expect(wrapper.find(Card.Body)).toHaveLength(1);
    expect(wrapper.find(Card.Title)).toHaveLength(1);
    expect(wrapper.find(Card.Subtitle)).toHaveLength(1);
    expect(wrapper.find(SpotifyLinks)).toHaveLength(1);
  });

  it("uses correct URL for the image", () => {
    const wrapper = shallow(<Album album={albumTaylorSwiftLover} />);
    expect(wrapper.find(Card.Img).first().props().src).toEqual("https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647");
  });

  it("contains the name of the album in the card title", () => {
    const wrapper = shallow(<Album album={albumTaylorSwiftLover} />);
    expect(wrapper.find(Card.Title).first().text()).toEqual("Lover");
  });

  it("contains link with name of artist in subtitle", () => {
    const wrapper = shallow(<Album album={albumTaylorSwiftLover} />);
    const links = wrapper.find(Card.Subtitle).first().find("a");
    expect(links).toHaveLength(1);
    const link = links.first();
    expect(link.text()).toEqual("Taylor Swift");
    expect(link.props().href).toEqual("https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02");
  });

  it("contains the year the album was released", () => {
    const wrapper = shallow(<Album album={albumTaylorSwiftLover} />);
    expect(wrapper.text()).toContain("2019");
  });

});


//
// Test input data
//

const albumTaylorSwiftLover = {
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
