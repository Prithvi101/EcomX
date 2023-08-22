import React, { useState } from 'react'
import OutSideTable from '../../buildPcComponents/OutSideTable'
import CardCart from '../../cards/CardCart'
import CardCartInfo from '../../cards/CardCartInfo';
import { useEffect } from 'react';
import BuildPCCard from '../../cards/BuildPCCard';
import { useSelector } from 'react-redux';

const BuildPc = () => {

    const [cardProduct, setCardProduct] = useState(0);

    const { subTotal } = useSelector(state => state.buildPC)


    return (
        <div className='w-full md:w-[80vw] my-4'>
            <h3>CUSTOM PC CONFIGURATOR CHOOSE YOUR PC PARTS!
            </h3>
            <hr className='my-4' />
            <p className='my-4' >The PC configurator of PcComponentes is the perfect tool for you to choose one by one the parts of your computer and try different configurations and budgets.In addition, you can save your settings, print it or generate a link to share it on your social networks.Its use is very simple and intuitive, and in a few steps you can assemble a computer by parts completely to your liking.Get your basic,gaming or professional desktop pc at the best price and for you.Can you ask for more?
            </p>
            <OutSideTable setCardProduct={setCardProduct} subTotal={subTotal} />
            <BuildPCCard subTotal={subTotal} />


        </div>
    )
}

export default BuildPc