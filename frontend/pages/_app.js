import "../assets/scss/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CDNs from "../components/CDNs";

const App = ({ Component, pageProps }) => {
    React.useEffect(() => {
        CDNs();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Component {...pageProps} />
            </main>
            <Footer />
        </>
    );
};

export default App;
