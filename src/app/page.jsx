import Navbar from "./components/Navbar";
import Welcome from "./welcomes/page";


export default function Home() {
  return (
    <main >
      <Navbar/>
      <div>
      <Welcome/>
      </div>
    </main>
  );
}
