import gallery1 from '../assets/images/gallery_1.jpg';
import gallery2 from '../assets/images/gallery_2.jpg';
import gallery3 from '../assets/images/gallery_3.jpg';
import gallery4 from '../assets/images/gallery_4.jpg';

export default class GalleryModel {
  static getImages() {
    return [
      {
        id: 1,
        url: gallery1,
        alt: 'Atmosphere at Vinylbdg',
        caption: 'Immersive vinyl experience'
      },
      {
        id: 2,
        url: gallery2,
        alt: 'Curated Vinyl Collection',
        caption: 'Our handpicked record collection'
      },
      {
        id: 3,
        url: gallery3,
        alt: 'Signature Cocktails',
        caption: 'Signature crafted cocktails'
      },
      {
        id: 4,
        url: gallery4,
        alt: 'DJ and Sound System',
        caption: 'High fidelity sound sessions'
      }
    ];
  }
}
