import { css } from 'frontity';
import Link from '@frontity/components/link';

import * as Variables from '../Variables';
import * as Mixins from '../Mixins';
import { addHeadingMediaQueries } from '../../processors/heroboxProcessor';

const LinkStyles = (type, fontSize) => {
  const remFontSize = fontSize && (fontSize.split(';')[0].split(':')[1].split('p')[0] / 10).toString();
  if(type === 'primary') {
    return css`
      display: inline-block;
      ${Mixins.aCleanUp(Variables.colorWhite)};
      background-color: ${Variables.colorGold};
      padding: 0.25rem 3.5rem;
      margin: 3rem 0;
      border-radius: 0.5rem;
      ${Mixins.applyBoxShadow};
      transition: all .1s;
      ${Mixins.addHeadingFont(400, remFontSize ? remFontSize : '3')};
      ${addHeadingMediaQueries(remFontSize ? remFontSize : '3')};
      @media (max-width: ${Variables.querySMMD}) {
        font-size: 3rem;
        padding: 0 2rem;
      }
      &:hover {
        background-color: ${Variables.colorRed};
      }
    `;
  }
}

export default LinkStyles;