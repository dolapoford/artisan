import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import Editor from "./components/Editor";
import Action from "./components/Action";
import Categories from "./components/Categories";

export default function Blogs() {
  return (
    <Box mt="100px">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <Editor />
        </div>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px">
          <Action />
          <Categories />
        </SimpleGrid>
      </div>

      {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <Editor />
      </SimpleGrid> */}
    </Box>
  );
}
