import EventList from "../components/event-list";
import path from "path";
import fs from "fs/promises";
import Page from "../components/UI/page";

const Nuevo = ({ events }) => {
  return (
    <Page className="h-[600vh]">
      <div className="bg-video">
        <video
          className="bg-video__content"
          autoPlay
          muted
          loop
        >
          <source src="/video.MP4" type="video/mp4" />
          {/* <source src="/video.webm" type="video/webm" /> */}
          Your browser is not supported!
        </video>
      </div>
      <EventList events={events} />
    </Page>
  );
};

export async function getStaticProps() {
  const dataFilePath = path.join(process.cwd(), "src/data", "kitesurf.json");
  const jsonData = await fs.readFile(dataFilePath);
  const data = JSON.parse(jsonData);
  return {
    props: { events: data.events },
  };
}

export default Nuevo;
