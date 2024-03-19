'use client';
import * as React from 'react';
import { toPng } from 'html-to-image';

const usePoster = (ref: React.RefObject<HTMLDivElement>) => {
  const [previewPoster, setPreviewPoster] = React.useState<string>('');
  const convertToImage = React.useCallback(() => {
    if (!ref.current) return;

    /* e.g. <div id="poster-square-wrapper" ... */
    const aspect = ref.current.id.split('-')[1];
    const ratio =
      aspect === 'standard' ? 0.4 : aspect === 'ninesixteen' ? 0.333 : 0.2857;

    toPng(ref.current!, {
      cacheBust: true,
      pixelRatio: ratio,
      includeQueryParams: true
    }).then((dataUrl) => {
      setPreviewPoster(dataUrl);
    });
  }, [ref]);

  React.useEffect(() => {
    convertToImage();
  });

  return {
    poster: previewPoster,
    loading: previewPoster === ''
  };
};

export default usePoster;
