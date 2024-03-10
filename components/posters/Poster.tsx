import React from 'react';
import StandardPoster from './StandardPoster';
import SquarePoster from './SquarePoster';
import { PosterVariant } from '../PosterVariantRadioGroup';
import NineSixteenPoster from './NineSixteenPoster';

export enum PosterWidth {
  STANDARD_WIDTH = 860,
  NINE_SIXTEEN_WIDTH = 1080,
  SQUARE_WIDTH = 1250
}

interface PosterProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: PosterVariant;
}

const Poster: React.FC<PosterProps> = ({ variant }) => {
  if (variant === PosterVariant.NINE_SIXTEEN) return <NineSixteenPoster />;

  if (variant === PosterVariant.SQUARE) return <SquarePoster />;

  return <StandardPoster />;
};

export default Poster;
