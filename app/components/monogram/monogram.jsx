import { forwardRef } from 'react';
import styles from './monogram.module.css';
import VignaanSvg from '~/assets/vignaan.png';
import VSvg from '~/assets/v.svg'


export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  return (
    <img
      src={VSvg}
      alt="Vignaan logo"
      ref={ref}
      className={`${styles.monogram} ${highlight ? styles.highlight : ''} ${className || ''}`}
      {...props}
      style={{ width: '48px', height: '70px' }} // Match your original SVG size or adjust as needed
    />
  );
});
