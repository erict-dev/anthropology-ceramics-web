# Project Notes

## Image Compression

When compressing images for this website, use macOS `sips` (same Core Image framework as Preview.app). This produces results equivalent to manually resizing in Preview with "medium" JPEG quality, with no noticeable quality loss.

### Process

1. Resize longest side to 1200px:
   ```bash
   sips --resampleHeightWidthMax 1200 -s format jpeg -s formatOptions <quality> "<input>" --out "<output>"
   ```

2. Target file size: under 90kb per image.

3. Quality varies per image depending on content complexity. Test multiple quality levels to find the highest quality that stays under 90kb:
   ```bash
   for q in 30 35 40 45 50 55 60 65 70; do
     out="/tmp/test_q${q}.jpg"
     sips --resampleHeightWidthMax 1200 -s format jpeg -s formatOptions $q "<input>" --out "$out" 2>/dev/null
     size=$(stat -f%z "$out")
     echo "Quality $q: $(($size / 1024))kb"
   done
   ```

4. Use the highest quality value that keeps the file under 90kb. Typical range is q32-q60 depending on image complexity.

5. Always visually verify compressed images have no noticeable quality loss before finishing.

### Important

- Do NOT use a single quality level for all images. Each image compresses differently based on content.
- Do NOT use other tools (ImageMagick, ffmpeg, etc.), `sips` matches Preview.app output because they share the same macOS Core Image framework.
- Previous attempts with lower resolution (800px) or uniform quality settings resulted in visible quality degradation.

## Copy Style

- Never use em-dashes (—) in text copy. Use commas, colons, or periods instead.
