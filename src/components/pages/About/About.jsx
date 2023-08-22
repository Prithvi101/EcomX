import React from 'react'
import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from 'react-accessible-accordion'

function About() {
    return (
        <div
            className='about  w-[100%] flex flex-col items-center max-w-[1280px]'>
            <h1 className='about text-[2rem] font-bold'>About</h1>
            <div className="aboutpage__image my-5 flex justify-center">
                <img
                    className='w-[50%] self-center '
                    src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1646795323.webp"
                    alt=""/>
            </div>
            <h1 className=' text-center mt-9 text-secondary px-10'>ICON Computers is dedicated
                to 100% customer delight ensuring that everything from placing your order to
                delivering it right to your doorstep is smooth and hassle-free. When it comes to
                online transactions, ICON Computers ensures that all credit/debit card and net
                banking transactions are done through secure and trusted gateways. All your bank
                details are safe and secure, and will not be shared with any third-party.
                ICON Computers offers a cash on delivery option if you need an easier payment
                method and excellent after sales services too. If you have any issues with your
                purchase, the easy exchange and replacement policies comes to your rescue.</h1>
            <h1 className='mt-10'>
                © Icon Computers 2023</h1>
            <div className="aboutPage__accordians mt-10 w-100%">

                <Accordion allowZeroExpanded={false} preExpanded={[1]}>
                    <AccordionItem uuid={1}>
                        <AccordionItemHeading>
                            <AccordionItemButton>Know Us
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                        <h1 className=' text-center mt-9 text-secondary px-10'>ICON Computers is dedicated
                to 100% customer delight ensuring that everything from placing your order to
                delivering it right to your doorstep is smooth and hassle-free. When it comes to
                online transactions, ICON Computers ensures that all credit/debit card and net
                banking transactions are done through secure and trusted gateways. All your bank
                details are safe and secure, and will not be shared with any third-party.
                ICON Computers offers a cash on delivery option if you need an easier payment
                method and excellent after sales services too. If you have any issues with your
                purchase, the easy exchange and replacement policies comes to your rescue.</h1>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    )
}

export default About