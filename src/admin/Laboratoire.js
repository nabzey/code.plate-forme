
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "../container.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import List from "./componentss_Pharmacie/List";
import Form from "./componentss_Pharmacie/Form";
const Laboratoire = () => {
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
                <Tab label="Liste laboratoires" value="1" />
                <Tab label="Ajouter un laboratoire" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <List/>
            </TabPanel>
            <TabPanel value="2">
              <Form/>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  )

};
}

export default Laboratoire;

