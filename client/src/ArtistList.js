import React from "react";

export const ArtistList = (props) => {
  if (!props.artists) {
    return <div>Error: No artists</div>
  }

  const numArtists = props.artists.length;
  const artists = props.artists.map((artist, index) => {
    const delim = index + 1 < numArtists ? ", " : "";
    return (
      <React.Fragment key={artist.id}>
        <a
          href={artist.external_urls.spotify}
          target="_blank"
          rel="noreferrer"
        >
          {artist.name}
        </a>
        {delim}
      </React.Fragment>
    );
  });

  return artists;
};

export default ArtistList;