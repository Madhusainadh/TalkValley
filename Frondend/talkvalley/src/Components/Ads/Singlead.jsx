import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Singlead = (props) => {
  let { data } = props;
  //    console.log(data)
  return (
    <div>
      <Box boxShadow={"base"} key={data._id}>
        <Box>
          <Image
            h={"300px"}
            w={"100%"}
            src={`http://drive.google.com/uc?export=view&id=${data.imageUrl}`}
          />
        </Box>
        <Stack>
          <Heading>{data.headline}</Heading>
          <Text>Company id:{data.companyId}</Text>
          <Text>{data.primaryText}</Text>
          <Text fontSize={"20px"}>{data.description}</Text>
          <Button mb={0}>{data.CTA}</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Singlead;
