import { pornhubUrl, pornhubEmbed } from '.';

const videoId = '1849749437';
const randomUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

describe('editorjs-embed-pornhub', () => {
  describe('pornhubUrl', () => {
    const url = `https://www.pornhub.com/view_video.php?viewkey=${videoId}`;

    it('should catch a url', () => {
      expect(url.match(pornhubUrl.regex)?.[1]).toBe(videoId);
    });

    it('should not catch a url', () => {
      expect(randomUrl.match(pornhubUrl.regex)?.[1]).not.toBe(videoId);
    });
  });

  describe('pornhubEmbed', () => {
    const url = `https://www.pornhub.com/embed/${videoId}`;

    it('should catch a url', () => {
      expect(url.match(pornhubEmbed.regex)?.[1]).toBe(videoId);
    });

    it('should not catch a url', () => {
      expect(randomUrl.match(pornhubEmbed.regex)?.[1]).not.toBe(videoId);
    });
  });
});
