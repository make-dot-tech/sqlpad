import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css';
import Tooltip from './Tooltip';

const ICON_SIZE = 20;

export interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: any;
  variant?: string;
  tooltip?: string;
  to?: string;
}

const ButtonLink = ({
  className,
  children,
  icon,
  tooltip,
  to,
  href,
  variant,
  ...rest
}: Props) => {
  const classNames = [styles.btnLink];

  if (variant === 'primary') {
    classNames.push(styles.primary);
  } else if (variant === 'ghost') {
    classNames.push(styles.ghost);
  }

  if (className) {
    classNames.push(className);
  }

  let link;
  if (href) {
    link = (
      <a href={href} className={`dark:text-dark-textPrimary text-gray-800 `} {...rest}>
        {icon && React.cloneElement(icon, { size: ICON_SIZE }, null)}
        {children && icon && <span style={{ width: 4 }} />}
        {children}
      </a>
    );
  } else {
    link = (
      <Link to={to || ''} className={`dark:text-dark-textPrimary text-gray-800 flex flex-center`} {...rest}>
        {icon && React.cloneElement(icon, { size: ICON_SIZE }, null)}
        {children && icon && <span style={{ width: 4 }} />}
        {children}
      </Link>
    );
  }

  if (tooltip) {
    return (
      <Tooltip label={tooltip}>
        <span>{link}</span>
      </Tooltip>
    );
  }

  return link;
};

export default ButtonLink;
