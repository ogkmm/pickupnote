import React, { forwardRef } from 'react';
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

const Poster = forwardRef<HTMLDivElement, PosterProps>(
  ({ className, variant }, ref) => {
    if (variant === PosterVariant.NINE_SIXTEEN)
      return <NineSixteenPoster className={className} ref={ref} />;

    if (variant === PosterVariant.SQUARE)
      return <SquarePoster className={className} ref={ref} />;

    return <StandardPoster className={className} ref={ref} />;
  }
);

Poster.displayName = 'Poster';

export default Poster;
