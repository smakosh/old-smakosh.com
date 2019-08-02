// Props to https://github.com/narative/gatsby-theme-novela
export const range = (start, len, step = 1) =>
  len
    ? new Array(len)
        .fill(undefined)
        .map((_, i) => +(start + i * step).toFixed(4))
    : []
