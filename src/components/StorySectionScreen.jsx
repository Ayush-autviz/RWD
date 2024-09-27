import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const StorySectionScreen = () => {
  const [commentText, setCommentText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handlePlusClick = () => {
    setIsOpen(!isOpen);
  };

  const comments = [
    {
      id: 1,
      author: 'Mia Thompson',
      avatar: 'https://pagedone.io/asset/uploads/1710226776.png',
      content: 'In vestibulum sed aliquet id turpis. Sagittis sed sed adipiscing velit habitant quam. Neque feugiat consectetur consectetur turpis.',
      time: '12 hour ago',
      clap:4,
      heart:3,
      tears_of_joy:5
    },
    {
      id: 2,
      author: 'Emma Davis',
      avatar: 'https://pagedone.io/asset/uploads/1710238051.png',
      content: 'Rutrum enim commodo est tristique vitae ut porta euismod cras. Id quis at donec duis scelerisque. Diam magnis adipiscing tellus sapien diam neque porta nullam lectus. Velit ornare odio ornare congue eleifend turpis nulla diam. Pharetra pellentesque ultrices sollicitudin phasellus suspendisse.',
      time: '2 Day ago',
      clap:4,
      heart:3,
      tears_of_joy:5
    },
    {
      id: 3,
      author: 'James Miller',
      avatar: 'https://pagedone.io/asset/uploads/1710225753.png',
      content: 'Lectus quis ac quis lectus elit. Dolor tortor eu tristique malesuada. Quis dictumst nulla vitae velit nisi. Volutpat enim turpis dignissim.',
      time: '5 Day ago',
      clap:4,
      heart:3,
      tears_of_joy:5
    }
  ];

  const handleCommentSubmit = () => {
    console.log('Submitted comment:', commentText);
    setCommentText('');
  };

  return (
    <section className="py-4 relative border border-solid border-[rgba(147, 0, 255, 0.10)]  rounded-[10px] mt-5">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-3 gap-3 inline-flex">
        <div className='flex flex-row gap-4 items-center '>
          <h2 className=" text-[#4db510]  text-3xl font-bold  leading-normal">Add Yours</h2>
          <div        className={`w-8 h-8 rounded-full bg-[#4db510] flex justify-center items-center transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`} 
        onClick={handlePlusClick} >
              <img className='w-5 h-5 filter-white ' src='plus.png'/>
          </div>
        </div>
          <div className={`w-full flex-col justify-start items-start gap-5 mt-3  flex overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100 mb-3' : 'max-h-0 opacity-0'}`}>
            <div className="w-full rounded-3xl justify-start items-start gap-3.5 inline-flex ">
              <textarea class="w-full p-5  rounded-[12px] border shadow-md resize-none placeholder-gray-400 bg-[#dddddd24]  text-lg text-gray-900" placeholder="Share your story here..." rows="5"></textarea>
            </div>
            <div className="flex justify-center items-center w-full">
  <div
    className="px-5 cursor-pointer py-2.5 rounded-full w-full  bg-[#4db510] duration-200 items-center justify-center flex flex-row group"
    onClick={handleCommentSubmit}
  >
    <div className="h-full w-full rounded-full flex items-center justify-center">
      {/* Image (Visible by default) */}
      <img
        className="h-8 w-8 filter-white transition-opacity duration-200 opacity-100 group-hover:opacity-0"
        src="send.png"
        alt="Send Icon"
      />
      {/* Text (Visible on hover) */}
      <span className="absolute text-white text-lg font-bold  transition-opacity duration-200 opacity-0 group-hover:opacity-100">
        Post your story
      </span>
    </div>
  </div>
</div>

          </div>
          <div className="w-full flex-col justify-start items-start gap-8  flex">
            {comments.map((comment) => (
                <div
                        class="w-full lg:p-8 p-5 bg-white rounded-[12px] border border-gray-200 flex-col justify-start items-start flex">
                        <div class="w-full flex-col justify-start items-start gap-3.5 flex">
                            <div class="w-full justify-between items-center inline-flex">
                                <div class="justify-start items-center gap-2.5 flex">
                                    <div
                                        class="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                                        <img class="rounded-full object-cover" src={comment.avatar}
                                            alt="John smith image" />
                                    </div>
                                    <div class="flex-col justify-start items-start gap-1 inline-flex">
                                        <h5 class="text-gray-900 text-sm font-semibold leading-snug">{comment.author}</h5>
                                        <h6 class="text-gray-500 text-xs font-normal leading-5">{comment.time}</h6>
                                    </div>
                                </div>
 
                            </div>
                            <p class="text-gray-800 text-sm font-normal leading-snug">{comment.content}</p>
                        </div>
                        <div className='flex flex-row gap-2 mt-4'>
                             <div className='flex-row  px-2 py-1  rounded-full bg-[#e9e9e9] flex gap-2 justify-center items-center'>
                                <div className='bg-white rounded-full justify-center items-center flex p-[2px] '>
                                👏
                                </div>
                                <div className=' rounded-full justify-center items-center flex p-[2px] w-4 '>
                                {comment.clap}
                                </div>
                             </div>

                             <div className='flex-row  px-2 py-1  rounded-full bg-[#e9e9e9] flex gap-2 justify-center items-center'>
                                <div className='bg-white rounded-full justify-center items-center flex p-[2px] '>
                                ❤️
                                </div>
                                <div className=' rounded-full justify-center items-center flex p-[2px] w-4 '>
                                {comment.heart}
                                </div>
                             </div>


                             <div className='flex-row  px-2 py-1  rounded-full bg-[#e9e9e9] flex gap-2 justify-center items-center'>
                                <div className='bg-white rounded-full justify-center items-center flex p-[2px] '>
                                😂
                                </div>
                                <div className=' rounded-full justify-center items-center flex p-[2px] w-4 '>
                                {comment.tears_of_joy}
                                </div>
                             </div>
                        </div>
                    </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySectionScreen;