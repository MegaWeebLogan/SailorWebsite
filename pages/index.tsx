import React, { memo } from "react";
import Layout from "../components/Layout";
import { chakra } from "@chakra-ui/react";
import LinkList from "../components/LinkList";
import CreditText from "../components/CreditText";
import ParallaxBackground from "../components/ParallaxBackground";

const Home = () => {
  return (
    <Layout title="Sailor <3" description="">
      <chakra.div position="relative" h="100vh" overflow="hidden">
        <chakra.div pointerEvents="none">
          <ParallaxBackground />

          <chakra.div
            position="absolute"
            bottom={0}
            w="full"
            h="sm"
            bg="linear-gradient(transparent, rgba(0, 0, 0, 0.5))"
          />
        </chakra.div>

        <LinkList />
        <CreditText />
      </chakra.div>
    </Layout>
  );
};

export default memo(Home);
