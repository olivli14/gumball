// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const PotatoModule = buildModule("Potato", (m) => {
  const potato = m.contract("Potato");

  return { potato };
});

export default PotatoModule;
