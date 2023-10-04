import Accordion from "../components/Accordion.js";

function AccordionPage() {
  
  const items = [
    {
      id: 1,
      label: "Do You Have A Favorite Japanese Snack?",
      content: "I've tasted over a thousand snacks by now, but my absolute favorite is still the White Strawberry from Nagano Prefecture for its crunchy, tart, and not-too-sweet flavors.",
    },
    {
      id: 2,
      label: "What's Your Favorite Thing About Bokksu?",
      content: "Delivering boxes of delight and culture to like-minded foodies all around the world and hearing their joyous feedback afterwards :)",
    },
    {
      id: 3,
      label: "What Do You Have Planned Next For Bokksu?",
      content: "Everything we do at Bokksu is to realize our purpose of bridging cultures through authentic Asian food. We have a lot of exciting new products coming out soon so sign up for our newsletter below to be the first to know!",
    },
  ];

  return <Accordion items={items} />  
}

export default AccordionPage;
