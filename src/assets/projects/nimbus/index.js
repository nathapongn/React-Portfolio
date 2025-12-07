const images = import.meta.glob('./*.webp', { eager: true });
const videos = import.meta.glob('./vid/*.mp4', { eager: true });

const assets = {};

function ensureThemeBucket(name, theme) {
  if (!assets[name] || typeof assets[name] !== 'object') {
    assets[name] = {};
  }
  if (!assets[name][theme] || typeof assets[name][theme] !== 'object') {
    assets[name][theme] = {};
  }
}

function processImage(path, mod) {
  const clean = path.replace('./', '').replace(/\.(webp)$/, '');
  const lastUnderscore = clean.lastIndexOf('_');

  if (lastUnderscore === -1) {
    // No theme suffix
    assets[clean] = { image: mod.default };
    return;
  }

  const name = clean.substring(0, lastUnderscore);
  const theme = clean.substring(lastUnderscore + 1);

  ensureThemeBucket(name, theme);
  assets[name][theme].image = mod.default;
}

function processVideo(path, mod) {
  const clean = path.replace('./vid/', '').replace(/\.(mp4)$/, '');
  const lastUnderscore = clean.lastIndexOf('_');

  if (lastUnderscore === -1) {
    assets[clean] = { video: mod.default };
    return;
  }

  const name = clean.substring(0, lastUnderscore);
  const theme = clean.substring(lastUnderscore + 1);

  ensureThemeBucket(name, theme);
  assets[name][theme].video = mod.default;
}

Object.entries(images).forEach(([p, m]) => processImage(p, m));
Object.entries(videos).forEach(([p, m]) => processVideo(p, m));

export default assets;
