import React from "react";
import { Text,Image,Box,Stack,Tag,TagLabel,Heading } from "@chakra-ui/react";


const Product = () => {
  // // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () =><div />;
   // Sample card from Airbnb
  

  // function AirbnbExample() {
    // const property = {
    //   imageUrl: 'https://bit.ly/2Z4KKcF',
    //   imageAlt: 'Rear view of modern home with pool',
    //   beds: 3,
    //   baths: 2,
    //   title: 'Modern home in city center in the heart of historic Los Angeles',
    //   formattedPrice: '$1,900.00',
    //   reviewCount: 34,
    //   rating: 4,
    // }
  
  //   return (
  //   )
  // };
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  return (
    <>
   
{/* 
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image src={property.imageUrl} alt={property.imageAlt} />

    <Box p='6'>
      <Box display='flex' alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='teal'>
          New
        </Badge>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          {property.beds} beds &bull; {property.baths} baths
        </Box>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {property.title}
      </Box>

      <Box>
        {property.formattedPrice}
        <Box as='span' color='gray.600' fontSize='sm'>
          / wk
        </Box>
      </Box>

      <Box display='flex' mt='2' alignItems='center'>
       
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {property.reviewCount} reviews
        </Box>
      </Box>
    </Box>
  </Box> */}








    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category"></Text>
      <Tag>
       
        <TagLabel data-cy="product-gender"></TagLabel>
      </Tag>
      <Heading data-cy="product-title"></Heading>
      <Box data-cy="product-price"></Box>
    </Stack>
    </>
  );
};

export default Product;
