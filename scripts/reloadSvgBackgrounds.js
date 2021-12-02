Reveal.addEventListener('slidechanged', reloadSvgBackgrounds);

function reloadSvgBackgrounds(event) {
  const backgroundStyle =
    event.currentSlide.slideBackgroundContentElement.style;
  const backgroundImage = backgroundStyle.backgroundImage;

  const svgWithoutVersionRegex = /url\(\"(.*\.svg)\"\)/;
  const matchWithoutVersion = svgWithoutVersionRegex.exec(backgroundImage);
  if (matchWithoutVersion) {
    const url = matchWithoutVersion[1];
    backgroundStyle.backgroundImage = `url("${url}?v=1")`;
  }

  const svgWithVersionRegex = /url\(\"(.*\.svg)\?v=(\d*)\"\)/;
  const matchWithVersion = svgWithVersionRegex.exec(backgroundImage);
  if (matchWithVersion) {
    const url = matchWithVersion[1];
    const version = parseInt(matchWithVersion[2], 10);
    backgroundStyle.backgroundImage = `url("${url}?v=${version + 1}")`;
  }
}
