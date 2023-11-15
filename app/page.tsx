import { RetrievalButton } from '@/components/button/RetrievalButton';
import RetrievalBox from '@/components/RetrievalBox';
import { IoShareOutline } from 'react-icons/io5';

export default function Home() {
  return (
    <>
      <section className="w-full h-screen flex flex-row-reverse">
        <div className="flex flex-col justify-center gap-2">
          <p className="text-5xl">用文字记录音乐生活</p>
          <div>
            <p>如何获取曲目链接？</p>
            <p>
              在对应曲目页面上找到
              <span className="inline-flex items-baseline">
                <IoShareOutline />
              </span>
              分享，选择复制链接或拷贝
            </p>
          </div>
          <div className="flex flex-wrap md:flex-nowrap my-1 gap-3">
            <RetrievalBox className="flex-1" />
            <RetrievalButton />
          </div>
        </div>
      </section>
    </>
  );
}
