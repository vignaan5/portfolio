import { forwardRef } from 'react';
import styles from './monogram.module.css';
import VignaanSvg from '~/assets/vignaan.png'; // Import your SVG file

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  return (
    <img
      src={VignaanSvg}
      alt="Vignaan logo"
      ref={ref}
      className={`${styles.monogram} ${highlight ? styles.highlight : ''} ${className || ''}`}
      {...props}
      style={{ width: '48px', height: '29px' }} // Match your original SVG size or adjust as needed
    />
  );
});
