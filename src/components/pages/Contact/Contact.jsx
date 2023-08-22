import React from 'react'

function Contact() {
    return (
        <div className='contact__container w-[100%]  flex flex-col max-w-[1280px]'>
            <div className="contact__mainContainer flex flex-col md:flex-row h-[100%]  ">
                <div className="contact__location_container w-[100%] md-w-[40%]  h-[100] p-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60045.015832416364!2d75.29864572926007!3d19.847843090865695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb98659373ea27%3A0xedc42424d22b050e!2sIcon%20Computers!5e0!3m2!1sen!2sin!4v1682077973807!5m2!1sen!2sin"
                        width="100%"
                        title='map'
                        height="100%"
                        style={{
                            border: "0"
                        }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contact__formContainer flex flex-col items-center md:w-[60%]">
                    <h1 className='text-[2rem] font-bold text-center '>Contact Us</h1>
                    <div className="contact__input flex flex-col w-[80%]">
                        <input
                            type="text"
                            className='px-2 my-5 py-2 w-[100%] placeholder:ml-2 border-solid border-2 border-slate-400 rounded-lg'
                            required={true}
                            placeholder='Your Name'/>
                        <input
                            type="text"
                            className='px-2 my-5 py-2 w-[100%] placeholder:ml-2 border-solid border-2 border-slate-400 rounded-lg'
                            required={true}
                            placeholder='Your Email Adderss'/>
                        <textarea
                            type="text"
                            placeholder='Your Question'
                            className='border-solid border-2 border-slate-400 rounded-lg p-2 mb-2'
                            cols="30"
                            rows="10"/>
                        <button
                            className='bg-secondary w-[30%] px-[10px] py-[16px] text-white rounded-lg font-bold self-end'>Submit</button>
                    </div>
                </div>
            </div>
            <h1 className='mt-10 py-15 text-center' >16, Nageshwarwadi - Nirala Bazar Rd, Swatantrya Sainik Colony,
                Nageshwarwadi, Aurangabad, Maharashtra 43100116, Nageshwarwadi - Nirala Bazar Rd, Swatantrya Sainik Colony,
                Nageshwarwadi, Aurangabad, Maharashtra 431001
                16, Nageshwarwadi - Nirala Bazar Rd, Swatantrya Sainik Colony,
                Nageshwarwadi, Aurangabad, Maharashtra 431001
                16, Nageshwarwadi - Nirala Bazar Rd, Swatantrya Sainik Colony,
                Nageshwarwadi, Aurangabad, Maharashtra 431001</h1>

        </div>
    )
}

export default Contact