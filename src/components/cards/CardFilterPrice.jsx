import React, {useState} from 'react'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Slider from '@material-ui/core/Slider';
function CardFilterPrice() {
    const [value, setValue] = useState([0, 9999]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeCheckboxL = (event) => {
        setValue(event.currentTarget.value);
    };
    const handleChangeCheckboxR = (event) => {
        const x = [...value]
        x[1]= event.currentTarget.value
        setValue(x);
    };

    return (
        <div className='cardfilter'>
            <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>Price</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="cardFilter__item mb-2 pb-2 flex-col  flex">
                            <h1>Select Price Range</h1>
                            <div className="cardFilterPriceBox flex">
                                <input className='w-[40%] m-5' type="number" onChange={handleChangeCheckboxL} value={value[0]} />
                                <input className='w-[40%] m-5' type="number" onChange={handleChangeCheckboxR} value={value[1]}/>
                            </div>
                            <Slider
                                getAriaLabel={() => 'PriceRange'}
                                value={value}
                                max={9999}
                                onChange={handleChange}
                                valueLabelDisplay="auto"/>
                        </div>

                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default CardFilterPrice