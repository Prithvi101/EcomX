import React from 'react'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function CardFilter() {
    return (
        <div className='cardfilter'>
            <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>Manufacturers</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="cardFilter__item mb-2 pb-2 border-b border-b-slate-200 flex">
                            <input type="checkbox" value="Male" name="gender"/>
                            <h1 className='ml-5'>ASUS</h1>
                        </div>
                        <div className="cardFilter__item mb-2 pb-2 border-b border-b-slate-200 flex">
                            <input type="checkbox" value="Male" name="gender"/>
                            <h1 className='ml-5'>MSI</h1>
                        </div>
                        <div className="cardFilter__item mb-2 pb-2 border-b border-b-slate-200 flex">
                            <input type="checkbox" value="Male" name="gender"/>
                            <h1 className='ml-5'>Dell</h1>
                        </div>
                        <div className="cardFilter__item mb-2 pb-2 border-b border-b-slate-200 flex">
                            <input type="checkbox" value="Male" name="gender"/>
                            <h1 className='ml-5'>Hp</h1>
                        </div>
                        <div className="cardFilter__item mb-2 pb-2 border-b border-b-slate-200 flex">
                            <input type="checkbox" value="Male" name="gender"/>
                            <h1 className='ml-5'>Adata</h1>
                        </div>
                        
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default CardFilter