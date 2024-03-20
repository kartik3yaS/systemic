import React from "react";
import { useState } from "react";
import  { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
// import img4 from "../assets/img4.png";
// import img5 from "../assets/img5.png";
// import img6 from "../assets/img6.png";
// import img7 from "../assets/img7.png";
// import img8 from "../assets/img8.png";
// import img9 from "../assets/img9.png";
// import img10 from "../assets/img10.png";

const slides = [
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/bf2f4077-f535-4195-9efb-52756a98070f/Untitled.png?id=89bfc120-2c14-43d7-9470-835afc89abb2&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=pVMm3I4iFEdoIve5r4JmdNQ_jtO0NOHkYgy5hy0ukT4&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/8b5aca2f-a69d-45ae-b403-a1a7db496f98/Untitled.png?id=ad352b03-5c03-471b-a134-d6f2c7ffcb9b&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=X8Th8hc876BFzZG9fVJ5QSZ8XhOeFhQmAbNjtCJs9S0&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/4d6ff0c5-fb06-41e2-91ea-611a6b227c8f/Untitled.png?id=a49515d9-58bb-4c79-833d-f50cddb5d455&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=0SmpTgHSWo-3Vpxiq-RfCgg7_0Pr3qI1c68L7sjmu2I&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/b2acb8fa-6443-46ee-86a2-273a39052de0/Untitled.png?id=bd3796d2-fdcc-4ac9-a332-df1afcae5f67&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=VZKYyXWluI7-zYVTGG2eDdF_C6ryHFGHx_0hriWmdDE&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/1b1f0650-faa3-4ad8-83a8-cb8546080154/Untitled.png?id=5d8b0f6e-1a90-4603-99ca-5f82cd31bdc6&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=EKN9rXykP1G8lfdi6kbkC8Oz4dHcSb82ZJ_x5m7eFU4&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/8d4778b9-ed18-4713-92a0-2b103a6132fb/Untitled.png?id=d49c90c4-479b-479f-ac52-976832cde6ca&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=fCdLJUL4_7DI26tQxj7LnQ7FWqIXcvkpAsFFpiJ1PbE&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/855fd03b-cb37-4e2c-8214-fef34086a412/Untitled.png?id=ac349807-48b8-4bb7-ad5b-3602ca7fa421&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=LHLw7ft7C8dt25p710GROZBIm3pw9_DglcC9ppoo2LI&downloadName=Untitled.png'
    }, {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/7c8c6796-19f1-40a3-9ed9-9392ec086769/Untitled.png?id=86243842-6f26-41a3-9f93-bb80a78f3fb2&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=ALEIA3P5rlFj4kNpCGjdUwV6VzYe8LR9vDbxOon20fY&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/aa5d7905-001d-4421-a62b-20d06dc94e56/Untitled.png?id=8f87aebd-40c4-40da-bf39-1a6189c260e1&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=0TE7UnGWDkonV5ZV0gVRK5_GHJGqHjQtKqrELnlvExI&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/3b662448-ca27-45ef-9d17-a4b5027bc5db/Untitled.png?id=bccefaca-50cf-4ba6-8f40-f38c3561b0b5&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=1s5ueTdEF3x3Sonk50D1A6GC7EeFNm1xcc_7cnFhPsI&downloadName=Untitled.png'
    },
    {
        url: 'https://file.notion.so/f/f/f78663f8-78b0-4675-9f1f-807e68f53ff1/1790eb96-29b6-4fb6-9c90-e7c58c2b19c0/Untitled.png?id=de2220c1-8ccd-426a-9fad-7efe5266ce14&table=block&spaceId=f78663f8-78b0-4675-9f1f-807e68f53ff1&expirationTimestamp=1711051200000&signature=98OECewQ94wYq8IQiqdxCc_fsOcLkJOIdrZsi2-PpII&downloadName=Untitled.png'
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