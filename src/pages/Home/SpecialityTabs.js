import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { treatments } from "../../lib/TreatmentList";


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
            <div className="flex flex-wrap md:flex-nowrap gap-5 justify-center">
              <p>
                <span className="block italic text-lg font-thin my-1">{treatment.intro}</span>
                <span>{treatment.detailedDescription}</span>
              </p>
                <img src={treatment.image} className="object-contain h-48" ></img>
            </div>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
