import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary';
  padding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = true
}) => {
  const backgroundClasses = {
    white: 'bg-warm-50',
    gray: 'bg-neutral-50', 
    primary: 'bg-primary-50'
  };
  
  const paddingClass = padding ? 'section-padding' : '';
  
  return (
    <section 
      id={id}
      className={`${backgroundClasses[background]} ${paddingClass} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};
