import React from 'react';
import { DataContext } from './provider/InterInfoProvider';
import PickupnotePosterBottomKVQRcodeStyle from './PknPosterBottomKVQRcodeStyle';
import PickupnotePosterBottomKVSCStyle from './PknPosterBottomKVSCStyle';

const PknPosterBottomKV = () => {
  const { state: interInfo } = React.useContext(DataContext);

  return interInfo.isSCAvailable ? (
    <PickupnotePosterBottomKVSCStyle />
  ) : (
    <PickupnotePosterBottomKVQRcodeStyle />
  );
};

export default PknPosterBottomKV;
