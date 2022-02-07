import { CancelSVG } from './cancel-svg';
import { CheckmarkSVG } from './checkmark-svg';
import { InfoSVG } from './info-svg';
import { MagnifyingGlassSVG } from './magnifying-glass-svg';

const Icons = () => {
  return (
    <div className="flex">
      <MagnifyingGlassSVG />
      <CancelSVG />
      <CheckmarkSVG />
      <InfoSVG />
    </div>
  );
};

export { Icons };
