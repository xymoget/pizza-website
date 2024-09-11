import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
    {
        question: "What is Pizza Shop?",
        answer: "Pizza Shop is the best place to order fresh, delicious pizzas made with love and fresh ingredients."
    },
    {
        question: "How do I place an order?",
        answer: "You can place an order by clicking the 'Order Now' button, selecting your favorite pizza, and checking out."
    },
    {
        question: "Do you offer home delivery?",
        answer: "Yes, we offer fast home delivery right to your doorstep."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, debit cards, and popular payment gateways like PayPal."
    }
];

function Faq() {
    return (
        <Container sx={{ my: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Frequently Asked Questions
            </Typography>
            {faqData.map((faq, index) => (
                <Accordion key={index}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`faq-content-${index}`}
                        id={`faq-header-${index}`}
                    >
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
}

export default Faq;
