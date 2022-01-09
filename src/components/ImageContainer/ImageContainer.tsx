import { ImageProps } from '@interfaces/props';
import Image from 'next/image';
import { FC } from 'react';

const rgbDataUrlBuilder = (base: string) => `data:image/jpg;base64,${base}`;

export const ImageContainer: FC<ImageProps> = ({ src, className, alt, rounded }) => (
    <div className={`relative ${className}`}>
        <Image
            className={`transition-all duration-200 ${rounded && 'rounded-full'}`}
            src={src ?? '/img/empty.png'}
            alt={alt}
            layout="fill"
            objectFit="cover"
            quality={100}
        />
    </div>
);

export const BlurredImageContainer: FC<ImageProps> = ({ src, className, alt, rounded, dataBlur }) => (
    <div className={`relative ${className}`}>
        <Image
            className={`transition-all duration-200 ${rounded && 'rounded-full'}`}
            src={src ?? '/img/empty.png'}
            alt={alt}
            layout="fill"
            objectFit="cover"
            quality={100}
            placeholder="blur"
            blurDataURL={rgbDataUrlBuilder(dataBlur)}
        />
    </div>
);
