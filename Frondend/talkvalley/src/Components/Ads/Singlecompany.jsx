import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Singlecompany = (props) => {
  let { data } = props;
  return (
    <div key={data._id}>
      <Box boxShadow={"base"} key={data._id} padding="40px">
        <Text fontSize={"20px"}>{data.name}</Text>
        <a href={data.url}>{data.url}</a>
      </Box>
    </div>
  );
};

export default Singlecompany;
