import React from "react";
import { useState } from "react";
import  { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";

const slides = [
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/3b662448-ca27-45ef-9d17-a4b5027bc5db/Untitled.png?id=bccefaca-50cf-4ba6-8f40-f38c3561b0b5&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=HDr7qv0h2ZEDi1vWzaDO6vTZOAuZSPCU2VKwdscb6bI&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/8b5aca2f-a69d-45ae-b403-a1a7db496f98/Untitled.png?id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=jZ6MJB-KLjw2aozMSrUal1Ti-m9jRwQhM-9CObdJPvI&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/4d6ff0c5-fb06-41e2-91ea-611a6b227c8f/Untitled.png?id=a49515d9-58bb-4c79-833d-f50cddb5d455&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=KvQ9CniwzD4oVxwf6pCgeW-HzBsGgVFJ_lBcPA4UOqY&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/b2acb8fa-6443-46ee-86a2-273a39052de0/Untitled.png?id=bd3796d2-fdcc-4ac9-a332-df1afcae5f67&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=dBjw7CbadsXHFHyu1fTrnvYK3NMup79IQmqnMFaaq5Q&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/1b1f0650-faa3-4ad8-83a8-cb8546080154/Untitled.png?id=5d8b0f6e-1a90-4603-99ca-5f82cd31bdc6&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=nDXmkxLyL_LBDoM_GOvRGuyBuBeN1EuVeCl5rcfchq4&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/8d4778b9-ed18-4713-92a0-2b103a6132fb/Untitled.png?id=d49c90c4-479b-479f-ac52-976832cde6ca&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=53s1zUzIYF3DovCSll-Vnh5n8MgqaEeIr5TObXbdFhI&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/855fd03b-cb37-4e2c-8214-fef34086a412/Untitled.png?id=ac349807-48b8-4bb7-ad5b-3602ca7fa421&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=SPwFMThVv2K4DNdFPMFUzSOw3OVtxv4m3f0DlhHyYuQ&downloadName=Untitled.png'
    }, {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/bf2f4077-f535-4195-9efb-52756a98070f/Untitled.png?id=89bfc120-2c14-43d7-9470-835afc89abb2&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=dMGTFZq170U8HIiAkUQ9OpQFn6PkNCKiUE-BjBHntxo&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/1790eb96-29b6-4fb6-9c90-e7c58c2b19c0/Untitled.png?id=de2220c1-8ccd-426a-9fad-7efe5266ce14&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710712800000&signature=6GsOKUY4O2MKPI5FN0uEDOGFPCtbqGypDn23s95BWEE&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/aa5d7905-001d-4421-a62b-20d06dc94e56/Untitled.png?id=8f87aebd-40c4-40da-bf39-1a6189c260e1&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710720000000&signature=E1Cew2AOGUE7ghmZnHpMp6Y4dHmk4wAoOa6wjEiTfFE&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/7c8c6796-19f1-40a3-9ed9-9392ec086769/Untitled.png?id=86243842-6f26-41a3-9f93-bb80a78f3fb2&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1710720000000&signature=oKMZW2UA1qPZ1uu0FG_enoSYDVTZO8fJ1bSNxdE6JWQ&downloadName=Untitled.png'
    }
];

const Slider = () => {

    const [currIndex, setCurrIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currIndex === 0;
        const newIndex = isFirstSlide ? slides.length-1 : currIndex-1;
        setCurrIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currIndex === slides.length-1;
        const newIndex = isLastSlide ? 0 : currIndex+1;
        setCurrIndex(newIndex);
    }

    return(
        <React.Fragment>
            <div className="bg-black flex flex-col">
                <div className="left max-w-[500px] h-[480px] md:h-[600px] w-full m-auto py-16 px-4 relative group">
                    <div style={{backgroundImage: `url(${slides[currIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                    </div>
                    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer md:hidden group-hover:block">
                        <ChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer md:hidden group-hover:block">
                        <ChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Slider;