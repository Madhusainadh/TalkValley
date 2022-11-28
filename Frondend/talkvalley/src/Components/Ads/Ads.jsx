import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GooglePhoto from "react-google-photo";
const Ads = () => {
  const [data, setdata] = useState([]);
  let { allads } = useSelector((store) => store.ads);

  useEffect(() => {
    setdata(allads);
    console.log(allads);
  }, [allads]);
  console.log(data[0]);
  data.map((e) => console.log(e.imageUrl));
  return (
    <Container maxW={"90%"} >
    <SimpleGrid mt={"20px"} gap={"10px"} columns={[1, 1,2, 3]}>
      {data.map((e) => (
        <Box boxShadow={"base"} key={e._id}  >
          <Box>
           <Image h={"300px"} w={"100%"} src={`http://drive.google.com/uc?export=view&id=${e.imageUrl}`} />
          </Box>
          <Stack>
            <Heading>{e.headline}</Heading>
            <Text>Company id:{e.companyId}</Text>
            <Text>{e.primaryText}</Text>
            <Text  fontSize={"20px"}  >{e.description}</Text>
            <Button mb={0}>{e.CTA}</Button>
          </Stack>
        </Box>
      ))}
    
    </SimpleGrid>
    </Container>
  );
};

export default Ads;
