import React, { useContext } from 'react';
import StandardPoster from './StandardPoster';
import { DataContext } from '@/lib/context';

export enum PosterDimension {
  STANDARD,
  NINE_SIXTEEN,
  SQUARE
}

export enum PosterWidth {
  STANDARD_WIDTH = 860,
  NINE_SIXTEEN_WIDTH = 1080,
  SQUARE_WIDTH = 1250
}

const dummyThought =
  "The quick brown fox jumps over the lazy dog. The dog is tired and doesn't want to play. The fox is hungry and wants to eat the dog. The dog barks at the fox and tries to scare it away. The fox is not scared and continues to chase the dog. The dog runs away and the fox gives up. The fox is disappointed but not discouraged. It knows that there are other dogs out there. It will find one that is not so lazy and that will want to play. The fox is determined to have a good time. The fox walks through the forest, looking for a new dog to play with. It sees a group of dogs playing fetch. The fox is excited and joins in the game. The dogs are surprised to see a fox, but they are happy to have a new friend. The quick brown fox jumps over the lazy dog. The dog is tired and doesn't want to play. The fox is hungry and wants to eat the dog. The dog barks at the fox and tries to scare it away. The fox is not scared and continues to chase the dog. The dog runs away and the fox gives up. The fox is disappointed but not discouraged. It knows that there are other dogs out there. It will find one that is not so lazy and that will want to play. The fox is determined to have a good time. The fox walks through the forest, looking for a new dog to play with. It sees a group of dogs playing fetch. The fox is excited and joins in the game. The dogs are surprised to see a fox, but they are happy to have a new friend.";

interface PosterProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'Standard' | 'NineSixteen' | 'Square';
}

const Poster: React.FC<PosterProps> = ({ variant }) => {
  const musicInfo = useContext(DataContext);

  if (variant === 'NineSixteen') return;
  if (variant === 'Square') return;

  return <StandardPoster info={musicInfo} thought={dummyThought} />;
};

export default Poster;
