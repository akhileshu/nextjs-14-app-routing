// links.js
// links.js
const links = {
  home: { url: "/", concept: "Home page" },
  streamUi: { url: "/streamUi", concept: "Loading, error, async" },
  posts: { url: "/posts", concept: "Dynamic routes" },
  blogs: { url: "/blogs", concept: "Dynamic routes" },
  dashboard: { url: "/dashboard", concept: "Parallel routes" },
  feed: { url: "/feed", concept: "Intercepting routes" },
  photos: { url: "/photo/2", concept: "Intercepting routes" },
  postsApi: { url: "/allPosts", concept: "Route and route handlers (API)" },
};

// components/Navbar.js
import Link from "next/link";
// import links from "../links";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {Object.entries(links).map(([name, { url, concept }]) => (
          <li key={name} style={styles.navItem} className="component-border-sm">
            <Link href={url}>
              <span style={styles.navLink}>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </span>
            </Link>
            <div>{concept}</div>
          </li>
        ))}
      </ul>
    </nav>
  );
};


const styles = {
  navbar: {
    marginBottom: "10px",
    backgroundColor: "#333",
    padding: "10px",
  },
  navList: {
    flexWrap: "wrap",
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    margin: 0,
    padding: 0,
  },
  navItem: {
    padding: "10px",
    margin: "2px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navbar;
