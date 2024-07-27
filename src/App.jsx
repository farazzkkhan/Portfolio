import styles from "./App.module.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { About } from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {


  return (
    <section>
      <div className={styles.App}>
        <Navbar />   
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <div className={styles.iconbar}>
        <a href="https://www.hackerrank.com/profile/farkhazan2002" target="_blank" className={styles.sideicon}>HackerRank</a>
        <a href="https://leetcode.com/u/farazzkkhan/" target="_blank" className={styles.sideicon}>LeetCode</a>
        <a href="https://www.codechef.com/users/farazzkkhan" target="_blank" className={styles.sideicon}>CodeChef</a>
        <a href="https://www.geeksforgeeks.org/user/farkhazan2002/" target="_blank" className={styles.sideicon}>GFG</a>
        <a href="https://x.com/farazzkkhan_" target="_blank" className={styles.sideicon}>Twitter</a>
      </div>
    </section>
  );
  
}

export default App



/* 
to run
npm run dev
*/