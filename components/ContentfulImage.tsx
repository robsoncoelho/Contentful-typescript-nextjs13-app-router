"use client";

import Image, { ImageProps, ImageLoaderProps } from "next/image";

const contentfulLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: ImageProps) => {
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
