import { FC, PropsWithChildren } from 'react';

const StaticLayout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return (
    <>
      <div>
        Static layout
        {children}
      </div>
    </>
  );
};
export default StaticLayout;
