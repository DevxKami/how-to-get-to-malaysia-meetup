import Image from 'gatsby-image';
import * as React from 'react';

export const Step = ({ stepNumber, description, photo }) => {
  return (
    <section className="h-full flex flex-col gap-3 justify-end">
      {photo && <Image fluid={photo.childImageSharp.fluid} alt="" />}
      <p className="pl-7 relative min-h-[100px]">
        <span className="absolute left-0 top-0 rounded-full bg-blue-500 text-white h-6 w-6 flex items-center justify-center">
          {stepNumber}
        </span>

        {description}
      </p>
    </section>
  );
};
