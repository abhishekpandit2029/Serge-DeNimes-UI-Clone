export interface IFooterData {
  heading: string;
  subItems: string[];
}

export interface ITestimonialData {
  desc: string;
  title: string;
  logo: string;
}

export interface IBrandCollectionData {
  [collectionName: string]: CollectionView;
}

interface CollectionView {
  initialView: string;
  mobileView: string;
}

export interface IHeroSectionData {
  mobileView: string;
  initialView: string;
}

interface RingItem {
  image: string;
  flip_image: string;
  title: string;
  price: string;
}

export interface IRingsData {
  datasetFirst: RingItem[];
  datasetSecond: RingItem[];
  datasetThird: RingItem[];
}

export interface IHallmarkingData {
  title: string;
  desc: string;
  logo: string;
}

export interface IBrandOverviewProps {
  mobileImage: string;
  desktopImage: string;
  title: string;
  textColor: string;
  buttonTitle?: string;
}

export interface ICollectionUIProps {
  image: string;
  alt: string;
  flipImage: string;
  title: string;
  price: string;
  isPerle?: boolean;
}
