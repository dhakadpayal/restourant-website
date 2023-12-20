import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        A restaurant is a place where you can eat a meal and pay for it. In restaurants, your food is usually served to you at your table by a waiter or waitress. The restaurant serves breakfast, lunch, and dinner. The food at the restaurant was good and the waiters were polite.
        </p>
        <br />
        <p>
        A restaurant is a place where people visit to eat and drink the food being prepared on the premises and pays for the same. The food is served at the table to have a comfortable visit for your meals. The restaurant offers a menu with various options for your meal, to choose from.

        Restaurants provide you with different cuisines of food to satisfy your hunger.
        The food preparation and presentation gives you a happy feel during your dull
        The ambiance that a restaurant provides you with gives one all the more reason to visit to cherish their time.
        The restaurant is a life savior when one doesn’t feel like cooking or wants to eat something else.
        You get to explore places when you plan to visit a restaurant.
        The fast-food restaurant provides your meals on the go to save your time at affordable prices.
        The restaurant is a place to enjoy your special occasions like Birthdays, Anniversaries, Achievements, etc.
        </p>
      </Box>
    </Layout>
  );
};

export default About;