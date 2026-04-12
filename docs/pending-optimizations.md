# Pending Asset Optimizations

## Images to compress (convert PNG/JPG → WebP)

Use [squoosh.app](https://squoosh.app) or similar tool. Target: 80% quality WebP.
After converting, update references in `src/data/` JSON files if the extension changes.

| File | Current Size | Target |
|------|-------------|--------|
| `public/images/news/as-2023.png` | 1.1MB | ~80KB |
| `public/images/projects/kwee-project.png` | 1.0MB | ~70KB |
| `public/images/video-poster.png` | 957KB | ~60KB |
| `public/images/projects/duotone-team.png` | 579KB | ~40KB |
| `public/images/news/zapeando.png` | 578KB | ~40KB |
| `public/images/projects/padeldoor-project.png` | 517KB | ~35KB |
| `public/images/news/as-2019.png` | 486KB | ~35KB |
| `public/images/news/as-2021.png` | 445KB | ~30KB |
| `public/images/news/antena3-2021.png` | 390KB | ~25KB |
| `public/images/spots/hermanus.jpg` | 303KB | ~20KB |
| `public/images/news/ser-2022.png` | 288KB | ~20KB |
| `public/images/projects/surfr-project.png` | 276KB | ~20KB |
| `public/images/logos/logo-negro.png` | 247KB | ~15KB |
| `public/images/logos/logo-blanco.png` | 247KB | ~15KB |
| `public/images/world-record.jpeg` | 222KB | ~15KB |
| `public/images/projects/trainsegrity-project.png` | 195KB | ~15KB |
| `public/images/yo-contact.png` | 171KB | ~12KB |

**Total current: ~7.2MB → Target: ~550KB**

## Videos to compress

Use ffmpeg to reduce bitrate. Commands:

```bash
# MP4 (H.264)
ffmpeg -i public/videos/video.MP4 -c:v h264 -b:v 1000k -c:a aac -b:a 128k public/videos/video-compressed.mp4

# WebM (VP9)
ffmpeg -i public/videos/video.webm -c:v libvpx-vp9 -b:v 800k public/videos/video-compressed.webm

# Short versions
ffmpeg -i public/videos/video-short.mp4 -c:v h264 -b:v 800k public/videos/video-short-compressed.mp4
ffmpeg -i public/videos/video-short.webm -c:v libvpx-vp9 -b:v 600k public/videos/video-short-compressed.webm
```

| File | Current Size | Target |
|------|-------------|--------|
| `public/videos/video-short.webm` | 2.7MB | ~800KB |
| `public/videos/video.MP4` | 2.4MB | ~700KB |
| `public/videos/video.webm` | 2.1MB | ~600KB |
| `public/videos/video-short.mp4` | 607KB | ~200KB |

**Total current: 7.9MB → Target: ~2.3MB**

Alternative: host videos on Cloudinary or similar CDN for adaptive streaming.

## Analytics consolidation

Consider removing `@segment/analytics-next` (180KB) if Google Analytics covers the same needs. Both are currently active in the project.
