import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Button = forwardRef(({ children, variant = 'primary', size = 'md', className = '', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-secondary via-accent to-teal text-white hover:shadow-xl hover:shadow-accent/40 hover:scale-105 focus:ring-2 focus:ring-accent focus:ring-offset-2',
    secondary: 'bg-white text-midnight border-2 border-midnight hover:bg-midnight hover:text-white hover:scale-105 focus:ring-2 focus:ring-midnight focus:ring-offset-2',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-midnight hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2',
    text: 'text-accent hover:text-secondary hover:scale-105 focus:ring-2 focus:ring-accent focus:ring-offset-2'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;
