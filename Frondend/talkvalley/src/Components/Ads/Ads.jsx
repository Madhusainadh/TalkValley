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
import Singlead from "./Singlead";
import Singlecompany from "./Singlecompany";

const Ads = () => {
  const [data, setdata] = useState([]);
  let { allads } = useSelector((store) => store.ads);

  useEffect(() => {
    setdata(allads);
    console.log(allads);
  }, [allads]);

  return (
    <Container maxW={"90%"}>
      <SimpleGrid mt={"20px"} gap={"10px"} columns={[1, 1, 2, 3]}>
        {data.map((e) => {
          return e.url ? (
            <div key={e._id}>
              <Singlecompany data={e} />
            </div>
          ) : (
            <div key={e._id}>
              <Singlead data={e} />
            </div>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default Ads;
