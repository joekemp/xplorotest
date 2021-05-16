import React from "react";
import {shallow} from 'enzyme';
import SpotifyLinks from "./SpotifyLinks";
import {albums as testAlbums} from "../test/albums"

const WEB_LINK_TITLE = "Open album online";
const SPOTIFY_LINK_TITLE = "Open album in Spotify";

describe("Tests SpotifyLinks component", () => {

  testAlbums.forEach(album => {
    it(`should have a web link and a Spotify link to the "${album.name}" album`, () => {
      const wrapper = shallow(<SpotifyLinks item={album.data} />);
      const links = wrapper.find("a");
      expect(links).toHaveLength(2);

      const webLink = links.at(0);
      expect(webLink.props().title).toEqual(WEB_LINK_TITLE);
      expect(webLink.props().href).toEqual(album.data.external_urls.spotify);

      const spotifyLink = links.at(1);
      expect(spotifyLink.props().title).toEqual(SPOTIFY_LINK_TITLE);
      expect(spotifyLink.props().href).toEqual(album.data.uri);
    });
  })

});
