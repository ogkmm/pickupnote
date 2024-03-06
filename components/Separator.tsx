import * as React from 'react';
import * as S from '@radix-ui/react-separator';

interface SeparatorProps
  extends S.SeparatorProps,
    React.HTMLAttributes<HTMLDivElement> {}

export function Separator({ className, ...props }: SeparatorProps) {
  return <S.Root className={className} {...props} />;
}
