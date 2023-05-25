import "./bestframework.css";
import { useEffect, useState } from "react";
import Header from "../Header";
// import Item from "./components/item";

let BestFramework = () => {
  const [english, setEnglish] = useState(true);
  // const [jsframeworks, setJsframeworks] = useState([
  //   { framework: "React", count: 0, id: 0 },
  //   { framework: "Next", count: 0, id: 1 },
  //   { framework: "Vue", count: 0, id: 2 },
  //   { framework: "WebDriverIO", count: 0, id: 3 },
  //   { framework: "Less", count: 0, id: 4 },
  //   { framework: "Sass", count: 0, id: 5 },
  //   { framework: "TypeScript", count: 0, id: 6 },
  //   { framework: "Flutter", count: 0, id: 7 },
  // ]);

  // const [count, setcount] = useState(0);

  // const [frameworks, setFrameworks] = useState({
  //   JS: [
  //     { framework: "React", count: 0, key: 0 },
  //     { framework: "Next", count: 0, key: 1 },
  //     { framework: "Vue", count: 0, key: 2 },
  //     { framework: "WebDriverIO", count: 0, key: 3 },
  //     { framework: "Less", count: 0, key: 4 },
  //     { framework: "Sass", count: 0, key: 5 },
  //     { framework: "TypeScript", count: 0, key: 6 },
  //     { framework: "Flutter", count: 0, key: 7 },
  //   ],
  //   NONJS: [
  //     { framework: "GitLab", count: 0, key: 0 },
  //     { framework: ".Net", count: 0, key: 1 },
  //     { framework: "PYTHON", count: 0, key: 2 },
  //     { framework: "PHP", count: 0, key: 3 },
  //     { framework: "C#", count: 0, key: 4 },
  //     { framework: "C++", count: 0, key: 5 },
  //     { framework: "Ruby", count: 0, key: 6 },
  //     { framework: "R", count: 0, key: 7 },
  //     { framework: "Julia", count: 0, key: 8 },
  //     { framework: "Kotlin", count: 0, key: 9 },
  //     { framework: "Swift", count: 0, key: 10 },
  //     { framework: "Go", count: 0, key: 11 },
  //     { framework: "Rust", count: 0, key: 12 },
  //     { framework: "Solidity", count: 0, key: 13 },
  //     { framework: "Java", count: 0, key: 14 },
  //     { framework: "Pene", count: 0, key: 15 },
  //   ],
  //   DB: [
  //     { framework: "SQL", count: 0, key: 0 },
  //     { framework: "SQLite", count: 0, key: 1 },
  //   ],
  //   NONFRAMEWORKS: [
  //     { framework: "GitLab", count: 0, key: 0 },
  //     { framework: "PostMan", count: 0, key: 1 },
  //     { framework: "Jira", count: 0, key: 2 },
  //     { framework: "Docker", count: 0, key: 3 },
  //   ],
  //   METHODOLOGIES: [
  //     { framework: "Pruebas funcionales", count: 0, key: 0 },
  //     { framework: "Outlook", count: 0, key: 1 },
  //     { framework: "Thunderbird", count: 0, key: 2 },
  //     { framework: "Linux", count: 0, key: 3 },
  //     { framework: "Linux Server", count: 0, key: 4 },
  //     { framework: "GNU", count: 0, key: 5 },
  //     { framework: "AWS", count: 0, key: 6 },
  //     { framework: "Scrum", count: 0, key: 7 },
  //     { framework: "Kanban", count: 0, key: 8 },
  //     { framework: "SOLID", count: 0, key: 9 },
  //     { framework: "BLOC", count: 0, key: 10 },
  //   ],
  //   UNKNOWN: [
  //     { framework: "Postfix", count: 0, key: 0 },
  //     { framework: "LAMP", count: 0, key: 1 },
  //     { framework: "CentOS 7", count: 0, key: 2 },
  //     { framework: "Windows Server 2016", count: 0, key: 3 },
  //     { framework: "3com", count: 0, key: 4 },
  //     { framework: "Cisco", count: 0, key: 5 },
  //     { framework: "Fortinet", count: 0, key: 6 },
  //     { framework: "Azure", count: 0, key: 7 },
  //     { framework: "Perl", count: 0, key: 8 },
  //     { framework: "Hana", count: 0, key: 9 },
  //     { framework: "Asana", count: 0, key: 10 },
  //     { framework: "Ionic", count: 0, key: 11 },
  //     { framework: "Oracle", count: 0, key: 12 },
  //     { framework: "Cloud CGP", count: 0, key: 13 },
  //     { framework: "VEEAM", count: 0, key: 14 },
  //     { framework: "VMware.Scripting", count: 0, key: 15 },
  //     { framework: "Office 365", count: 0, key: 16 },
  //     { framework: "GSUITE", count: 0, key: 17 },
  //     { framework: "WSUS", count: 0, key: 18 },
  //     { framework: "WDS", count: 0, key: 19 },
  //     { framework: "DataStudio", count: 0, key: 20 },
  //     { framework: "Power BI", count: 0, key: 21 },
  //   ],
  // });
  // const [file, setFile] = useState<File>();

  useEffect(() => {
    const checkLocale = () => {
      const l = localStorage.getItem("language");
      if (l === "english") {
        setEnglish(true);
      }
      if (l === "spanish") {
        setEnglish(false);
      }
    };
    checkLocale();
  }, []);

  const changeLocale = () => {
    if (!english) {
      localStorage.setItem("language", "english");
      setEnglish(true);
    }
    if (english) {
      localStorage.setItem("language", "spanish");
      setEnglish(false);
    }
  };

  // let handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     console.log(e.target.files[0].arrayBuffer());
  //     setFile(e.target.files[0]);
  //   }
  // };

  // let handleSave = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.files, "$$$$");
  // };

  // const add = (category: string, framework: string) => {
  //   if (category === "JS") {
  //     const search = jsframeworks.find((item) => item.framework === framework);
  //   }
  // };

  return (
    <>
      <Header changeLocale={changeLocale} english={english} />
      <div className="BestFramework">
        {/* <main>
          <div className="config">
            <div>
              <label>Load list</label>
              <input
                type="file"
                name="file"
                accept=".json"
                onChange={(e) => handleFile(e)}
              ></input>
            </div>
            <div>
              <label>Save list</label>
              <input
                type="file"
                name="file"
                accept=".json"
                onChange={(e) => handleSave(e)}
              ></input>
            </div>
          </div>
          <div className="list JS">
            <h2>JavaScript</h2>
            {jsframeworks.map((item, index) => (
              <Item
                key={index}
                category="JS"
                framework={item.framework}
                count={item.count}
                add={() => add("JS", item.framework)}
              />
            ))}
          </div>
          <div className="list NON-JS">
            <h2>Non-Js</h2>
            {frameworks.NONJS.map((item, index) => (
              <Item
                key={index}
                category="NON-JS"
                framework={item.framework}
                count={item.count}
                countModifier={countModifier}
              />
            ))}
          </div>
          <div className="list DB">
            <h2>Databases</h2>
            {frameworks.DB.map((item, index) => (
              <Item
                key={index}
                category="DB"
                framework={item.framework}
                count={item.count}
                countModifier={countModifier}
              />
            ))}
          </div>
          <div className="list NON-PROGRAMMING-SOFTWARE">
            <h2>Non-Frameworks</h2>
            {frameworks.NONFRAMEWORKS.map((item, index) => (
              <Item
                key={index}
                category="NON-PROGRAMMING-SOFTWARE"
                framework={item.framework}
                count={item.count}
                countModifier={countModifier}
              />
            ))}
          </div>
          <div className="list METHODOLOGIES">
            <h2>Non-Frameworks</h2>
            {frameworks.METHODOLOGIES.map((item, index) => (
              <Item
                key={index}
                category="NON-PROGRAMMING-SOFTWARE"
                framework={item.framework}
                count={item.count}
                countModifier={countModifier}
              />
            ))}
          </div>
          <div className="list UNKNOWN">
            <h2>Non-Frameworks</h2>
            {frameworks.UNKNOWN.map((item, index) => (
              <Item
                key={index}
                category="NON-PROGRAMMING-SOFTWARE"
                framework={item.framework}
                count={item.count}
                countModifier={countModifier}
              />
            ))}
          </div>
        </main> */}
      </div>
    </>
  );
};

export default BestFramework;
