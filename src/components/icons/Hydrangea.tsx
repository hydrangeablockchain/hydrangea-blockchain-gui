import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as HydrangeaIcon } from './images/hydrangea.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={HydrangeaIcon} viewBox="0 0 150 58" {...props} />;
}
