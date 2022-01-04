import { expect } from "chai";
import { ethers } from "hardhat";
import {setup} from "./utils";

describe("Greeter", async () => {
  it("Should return the new greeting once it's changed", async () => {
    const {owner,user1,greeter} = await setup();
    expect(await owner.greeter.greet()).to.eq("new greeting");

    const setGreetingTx = await owner.greeter.setGreeting("Hola, mundo!");
    await setGreetingTx.wait();
    expect(await owner.greeter.greet()).to.eq("Hola, mundo!");
  });
});
