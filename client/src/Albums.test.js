import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Albums from "./Albums";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should correctly render Taylor Swift Lover album", () => {
  act(() => {
    render(<Albums results={dataTaylorSwiftLover} />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(htmlTaylorSwiftLover);
});



//
// Test input and output data
//

const dataTaylorSwiftLover = {
  albums: {
    href: "https://api.spotify.com/v1/search?query=love&type=album&market=US&offset=0&limit=1",
    items: [
      {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02",
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
      },
    ],
    limit: 1,
    next: "https://api.spotify.com/v1/search?query=love&type=album&market=US&offset=1&limit=1",
    offset: 0,
    previous: null,
    total: 20003,
  },
};

const htmlTaylorSwiftLover = `
"<hr>
<h3>Albums</h3>
<div class=\\"row\\">
  <div class=\\"mb-4 col-lg-4 col-md-6 col-12\\">
    <div class=\\"card\\"><img class=\\"card-img-top\\" src=\\"https://i.scdn.co/image/ab67616d00001e02e787cffec20aa2a396a61647\\">
      <div class=\\"card-body\\">
        <div class=\\"float-right\\">2019</div>
        <div class=\\"card-title h5\\">Lover</div>
        <div class=\\"float-right\\"><a href=\\"https://open.spotify.com/album/1NAmidJlEaVgA3MpcPFYGq\\" title=\\"Open album online\\" target=\\"_blank\\" rel=\\"noreferrer\\"><img src=\\"web.png\\" alt=\\"web\\" class=\\"ml-4 mr-1\\"></a><a href=\\"spotify:album:1NAmidJlEaVgA3MpcPFYGq\\" title=\\"Open album in Spotify\\"><img src=\\"spotify.png\\" alt=\\"spotify\\" class=\\"mr-1 ml-1\\"></a></div>
        <div class=\\"card-subtitle h6\\"><a href=\\"https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02\\">Taylor Swift</a></div>
      </div>
    </div>
  </div>
</div>"
`