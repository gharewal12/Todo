import Atropos from "atropos/react";

const Home = () => {
    return (
        <div className="container">
            <Atropos className="atropos-banner"
                highlight={false}
                shadow={false }
            >
                <img className="atropos-banner-spacer" src="https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg" alt="" />
                <img data-atropos-offset="5" src="https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg" alt="" />
                <div data-atropos-offset="6" className="atropos-header-button-wrap" style={{ transitionDuration: '300ms', transform: "translate3d(0px, 0px, 0px)" }}>
                    <a className="bg-primary text-white rounded-full px-4 py-2 md:px-8 md:py-4 font-bold md:text-xl inline-flex hover:bg-opacity-70 duration-200 translate-y-full" href="">Get Started</a>
                </div>
            </Atropos>
        </div>);
}
export default Home;