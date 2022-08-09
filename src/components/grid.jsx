import * as React from 'react';

export const GridList = (props) => (
  <ul
    {...props}
    className="grid gap-2 sm:gap-3 lg:gap-5 lg:gap-y-12"
    style={{
      gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
    }}
  />
);

export const GridItem = (props) => <li {...props} />;
