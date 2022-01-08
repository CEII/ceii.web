import Image, { ImageProps } from 'next/image';
import { FC } from 'react';

const ImageContainer: FC<ImageProps> = ({ src, className, alt }) => (
    <div className={`relative ${className}`}>
        <Image
            className="rounded-full"
            src={src ?? '/img/empty.png'}
            alt={alt}
            layout="fill"
            objectFit="cover"
            quality={100}
        />
    </div>
);

export default ImageContainer;
