import { Box, Grid } from "@chakra-ui/react";

import SettingsInfoCard from "../components/settingsInfoCard";
import { SettingsStatusCard } from "../components/settingsStatusCard";

const Settings = () => {
  return (
    <Box display={"flex"} alignItems={"center"} height={"full"}>
      <Grid
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} // Add this line
        justifyContent={"center"}
        gap={10}
      >
        <SettingsInfoCard />
        <SettingsStatusCard />
      </Grid>
    </Box>
  );
};

export default Settings;
