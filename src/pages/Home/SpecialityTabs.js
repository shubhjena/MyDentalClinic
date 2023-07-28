import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { treatments } from "../Treatments/TreatmentList";


export default function ScrollableTabsButtonForce() {
  const [value, setValue] = React.useState('0');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            className=""
          >
            {treatments.map((treatment, index) => (
              <Tab
                key={treatment.name}
                label={treatment.name}
                value={`${index}`}
                className=""
              />
            ))}
          </Tabs>
        </Box>
        {treatments.map((treatment, index) => (
          <TabPanel key={treatment.name} value={`${index}`}>
            <span className="block italic text-lg font-thin my-1">{treatment.intro}</span>
            {treatment.description}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
