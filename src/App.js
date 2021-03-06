import Header from "./components/Header"
import Footer from "./components/Footer"
import IconSection from "./components/IconSection";


function App() {
  return (
    <main>
      <Header />
      <IconSection />
      <Header reverse />
      <Footer />
    </main>
  );
}

export default App;
