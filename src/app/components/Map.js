"use client";

import { useLoadScript } from "@react-google-maps/api";

const Map = ({ address }) => {
  const libraries = useMemo(() => [address], []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBRC8y_qSacGrVAdjJ5PcgrX_gsw-b_NJY",
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return <div className={styles.container}>Map Script Loaded...</div>;
};

export default Map;
