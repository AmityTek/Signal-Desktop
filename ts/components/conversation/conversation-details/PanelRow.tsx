// Copyright 2020 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import classNames from 'classnames';
import { bemGenerator } from './util';

export type Props = {
  alwaysShowActions?: boolean;
  className?: string;
  icon?: React.ReactNode;
  label: string;
  info?: string;
  right?: string | React.ReactNode;
  actions?: React.ReactNode;
  onClick?: () => void;
};

const bem = bemGenerator('module-conversation-details-panel-row');

export const PanelRow: React.ComponentType<Props> = ({
  alwaysShowActions,
  className,
  icon,
  label,
  info,
  right,
  actions,
  onClick,
}) => {
  const content = (
    <>
      {icon && <div className={bem('icon')}>{icon}</div>}
      <div className={bem('label')}>
        <div>{label}</div>
        {info && <div className={bem('info')}>{info}</div>}
      </div>
      {right && <div className={bem('right')}>{right}</div>}
      {actions && (
        <div className={alwaysShowActions ? '' : bem('actions')}>{actions}</div>
      )}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        className={classNames(bem('root', 'button'), className)}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return <div className={classNames(bem('root'), className)}>{content}</div>;
};