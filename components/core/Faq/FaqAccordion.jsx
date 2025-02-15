import { Accordion } from "@chakra-ui/react";
import React from "react";
import FaqDescription from "./FaqDescription";

export default function FaqAccordion() {
    return (
        <Accordion allowToggle>
            <FaqDescription
                title="What is Web Hosting?"
                description="Web hosting is the service of storing data that can keep websites up and running for users through the usage of servers. Every website you visit online has a host server, where many of them use a web host to manage that storage. Keep in mind that not every single hosting provider out there has the same quality level. Factors such as uptime and data speed, and quantity of transfer can differ from provider to provider."
            />
            <FaqDescription
                title="What is Shared Web Hosting?"
                description="In shared web hosting, each user gets a portion of the total available resources. This way, multiple domains can be hosted on a single server, and this means that the server’s capabilities are split across the websites. While this does not give websites the best of performance, it is the most affordable option out there and fit for a lot of beginners."
            />
            <FaqDescription
                title="What is a Domain Name?"
                description="Discussing a domain name is the name of the website, and every website has its own unique domain name. In order to get yours, you will need to purchase it through a domain registrar. They can cost anywhere from a few dollars to hundreds of dollars based on the contract and the domain’s popularity."
            />
            <FaqDescription
                title="What is Bandwidth? "
                description="Bandwidth is essentially the amount of data that is accessed when viewing a website. Every time a user views a website, data is transferred, and the measurement of that data transfer is bandwidth."
            />
            <FaqDescription
                title="What is Disk Space?"
                description="Disk space is the total space available for a user in order to store files. Files can be in any type, including HTML, images, and videos, and at any single given time, the total file size cannot exceed the disk space."
            />
            <FaqDescription
                title="What are the best web hosting companies?"
                description="This is highly dependent on what you need, but if you are looking for the best host company, you can pick between FastComet, Kamatera, WebDock, Flaunt7, A2 Hosting, Hostinger, and Scala Hosting."
            />
        </Accordion>
    );
}
