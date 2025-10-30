import { forwardRef } from 'react';
import styles from './monogram.module.css';
import VignaanSvg from '~/assets/vignaan.svg'; // Import your SVG file

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  return (
    <img
      src={VignaanSvg}
      alt="Vignaan logo"
      ref={ref}
      className={`${styles.monogram} ${highlight ? styles.highlight : ''} ${className || ''}`}
      {...props}
      style={{ width: '100px', height: '120px' }} // Match your original SVG size or adjust as needed
    />
  );
});
