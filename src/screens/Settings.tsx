import { Flex } from "@chakra-ui/react";

import SettingsInfoCard from "../components/settingsInfoCard";
import { SettingsStatusCard } from "../components/settingsStatusCard";

const Settings = () => {
  return (
    <Flex justifyContent={"center"} gap={20}>
      <SettingsInfoCard />
      <SettingsStatusCard />
    </Flex>
  );
};

export default Settings;
