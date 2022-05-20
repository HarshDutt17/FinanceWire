import About from "./components/about";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Landing from "./components/landing-area";


export default function App() {
  return (
    <div className="App text-xl bg-gray-100">
      <Header />
      <Landing />
      <Features />
      <About />
      <Footer />
    </div>
  );
}
