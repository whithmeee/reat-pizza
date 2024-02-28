import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={540}
        viewBox="0 0 271 540"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="288" y="367" rx="0" ry="0" width="0" height="1" />
        <rect x="288" y="368" rx="0" ry="0" width="1" height="1" />
        <rect x="239" y="412" rx="0" ry="0" width="26" height="2" />
        <rect x="207" y="396" rx="0" ry="0" width="11" height="10" />
        <rect x="3" y="273" rx="8" ry="8" width="260" height="67" />
        <rect x="7" y="373" rx="5" ry="5" width="57" height="40" />
        <rect x="162" y="376" rx="5" ry="5" width="101" height="42" />
        <rect x="227" y="431" rx="0" ry="0" width="19" height="2" />
        <circle cx="124" cy="126" r="103" />
        <rect x="105" y="157" rx="0" ry="0" width="0" height="44" />
        <rect x="10" y="243" rx="0" ry="0" width="238" height="12" />
    </ContentLoader>
);

export default MyLoader;
