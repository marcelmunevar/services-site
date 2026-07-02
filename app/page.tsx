import HomeContent from "./HomeContent";
import {
  buildHomeProfessionalServiceSchema,
  getHomeServiceTracks,
} from "../lib/structured-data";

export default function Home() {
  const structuredData = buildHomeProfessionalServiceSchema();

  const serviceTracks = getHomeServiceTracks();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeContent serviceTracks={serviceTracks} />
    </>
  );
}
