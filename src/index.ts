const params = {
  embedUrl: 'https://www.pornhub.com/embed/<%= remote_id %>',
  html: '<iframe frameborder="0" width="560" height="315" scrolling="no" allowfullscreen></iframe>',
  height: 560,
  width: 315,
};

export const pornhubUrl = {
  regex: /^https?:\/\/(?:www\.)?pornhub\.com\/view_video\.php\?viewkey=(\d+)/,
  ...params,
};

export const pornhubEmbed = {
  regex: /^https?:\/\/(?:www\.)?pornhub\.com\/embed\/(\d+)/,
  ...params,
};
