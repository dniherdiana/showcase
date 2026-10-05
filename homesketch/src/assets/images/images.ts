import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>('./*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

export const images: Record<string, ImageMetadata> = {};

for (const [path, mod] of Object.entries(modules)) {
  const name = (path.split('/').pop() as string).toLowerCase();
  images[name] = mod;
}