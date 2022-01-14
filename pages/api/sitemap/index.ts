import { NextApiRequest, NextApiResponse } from 'next';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const links = [
        { url: '/', changefreq: 'daily', priority: 1 },
        { url: '/login', changefreq: 'daily', priority: 0.5 },
        { url: '/register', changefreq: 'daily', priority: 0.5 },
        { url: '/home', changefreq: 'daily', priority: 0.5 },
    ];

    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        'Content-Type': 'application/xml',
    });

    const xmlString = await streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());

    res.end(xmlString);
};
