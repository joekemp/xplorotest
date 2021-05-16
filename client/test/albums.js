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

const albumBtsLoveYourself = {
  album_type: "compilation",
  artists: [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX",
      },
      href: "https://api.spotify.com/v1/artists/3Nrfpe0tUJi4K4DXYWgMUX",
      id: "3Nrfpe0tUJi4K4DXYWgMUX",
      name: "BTS",
      type: "artist",
      uri: "spotify:artist:3Nrfpe0tUJi4K4DXYWgMUX",
    },
  ],
  external_urls: {
    spotify: "https://open.spotify.com/album/2lATw9ZAVp7ILQcOKPCPqp",
  },
  href: "https://api.spotify.com/v1/albums/2lATw9ZAVp7ILQcOKPCPqp",
  id: "2lATw9ZAVp7ILQcOKPCPqp",
  images: [
    {
      height: 640,
      url: "https://i.scdn.co/image/ab67616d0000b2736feb6d9ed7891f40e9a524dd",
      width: 640,
    },
    {
      height: 300,
      url: "https://i.scdn.co/image/ab67616d00001e026feb6d9ed7891f40e9a524dd",
      width: 300,
    },
    {
      height: 64,
      url: "https://i.scdn.co/image/ab67616d000048516feb6d9ed7891f40e9a524dd",
      width: 64,
    },
  ],
  name: "Love Yourself 結 'Answer'",
  release_date: "2018-08-24",
  release_date_precision: "day",
  total_tracks: 26,
  type: "album",
  uri: "spotify:album:2lATw9ZAVp7ILQcOKPCPqp",
};

const albums = [
  { name: "Lover, Taylor Swift", data: albumTaylorSwiftLover },
  { name: "Love Yourself, BTS", data: albumBtsLoveYourself },
];

export default albums;
