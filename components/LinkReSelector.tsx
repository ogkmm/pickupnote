import { FC, useState } from 'react';
import ReselectRetrievalButton from './button/ReselectRetrievalButton';
import ReselectRetrievalInputBox from './inputbox/ReselectRetrievalInputBox';

interface LinkReSelectorProps extends React.HTMLAttributes<HTMLDivElement> {}

const LinkReSelector: FC<LinkReSelectorProps> = () => {
  const [searchExcutable, setSearchExcutable] = useState(false);
  const handleInputChange = (url: string) => {
    setSearchExcutable(url.length > 0);
  };

  return (
    <div className="rounded-[12px] py-[6px] bg-white">
      <div className="flex gap-[16px] px-[24px]">
        <ReselectRetrievalInputBox onInputChange={handleInputChange} />
        <ReselectRetrievalButton isExcutable={searchExcutable} />
      </div>
    </div>
  );
};

export default LinkReSelector;
