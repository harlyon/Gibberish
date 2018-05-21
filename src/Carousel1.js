import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cssgrid_blog1.png',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cssgrid_blog3.png',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cssgrid_blog1.png',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;