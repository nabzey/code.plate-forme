
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "../container.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Liste from "./components_Infirmier/liste";
import Formulaire from "./components_Infirmier/formulaire";
const Infirmier = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  return(
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="main-content">
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Liste infirmiers" value="1" />
                <Tab label="Ajouter un infirmier" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Liste />
            </TabPanel>
            <TabPanel value="2">
              <Formulaire/>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  )

};
}

export default Infirmier;
