import React from "react";
import {shallow, mount} from 'enzyme';
import Album from "./Album";
import Card from 'react-bootstrap/Card';
import SpotifyLinks from "./SpotifyLinks";
import CardImage from "./CardImage";
import {albums as testAlbums} from "../test/albums"

describe("Tests Album component", () => {

  testAlbums.forEach(album => {
    describe(`Using album "${album.name}":`, () => {

      it("contains the right number of components", () => {
        const wrapper = shallow(<Album album={album.data} />);
        expect(wrapper.find(Card)).toHaveLength(1);
        expect(wrapper.find(CardImage)).toHaveLength(1);
        expect(wrapper.find(Card.Body)).toHaveLength(1);
        expect(wrapper.find(Card.Title)).toHaveLength(1);
        expect(wrapper.find(Card.Subtitle)).toHaveLength(1);
        expect(wrapper.find(SpotifyLinks)).toHaveLength(1);
      });

      it("uses correct URL for the image", () => {
        const wrapper = mount(<Album album={album.data} />);
        expect(wrapper.find("img").first().props().src).toEqual(album.data.images[1].url);
      });

      it("contains the name of the album in the card title", () => {
        const wrapper = shallow(<Album album={album.data} />);
        expect(wrapper.find(Card.Title).first().text()).toEqual(album.data.name);
      });

      it("contains link with name of artist in subtitle", () => {
        const wrapper = shallow(<Album album={album.data} />);
        const links = wrapper.find(Card.Subtitle).first().find("a");
        expect(links).toHaveLength(1);
        const link = links.first();
        expect(link.text()).toEqual(album.data.artists[0].name);
        expect(link.props().href).toEqual(album.data.artists[0].external_urls.spotify);
      });

      it("contains the year the album was released", () => {
        const wrapper = shallow(<Album album={album.data} />);
        const releaseYear = album.data.release_date.substring(0, 4);
        expect(wrapper.text()).toContain(releaseYear);
      });

    });
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
