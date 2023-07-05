export default function useAssets() {
  const svgs = import.meta.globEager('/src/assets/*.svg');
  const pngs = import.meta.globEager('/src/assets/*.png');
  const jpegs = import.meta.globEager('/src/assets/*.jpeg');

  return {
    coding_aegir: jpegs['/src/assets/images/services/coding_aegir.jpg'].default,
    location_intelligence: jpegs['/src/assets/images/services/location_intelligence.jpg'].default,
    geo_data: jpegs['/src/assets/images/services/geo_data.jpg'].default,
    equipment_aegir: jpegs['/src/assets/images/services/equipment_aegir.jpg'].default,
    sys_integration: jpegs['/src/assets/images/services/sys_integration.jpg'].default,

    // aboutImage: svgs['/src/assets/aboutImage.svg'].default,
    // search: svgs['/src/assets/search.svg'].default,
    // info: pngs['/src/assets/info.png'].default,
  };
}