import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const StorySection = () => {
  const [commentText, setCommentText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [expandedComments, setExpandedComments] = useState({});
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Mia Thompson",
      avatar: "https://pagedone.io/asset/uploads/1710226776.png",
      content:
        "In vestibulum sed aliquet id turpis. Sagittis sed sed adipiscing velit habitant quam. Neque feugiat consectetur consectetur turpis. Fusce id ante euismod, fermentum purus eget, fermentum augue. Nam at felis sollicitudin, ultricies odio et, tempor nisi. Sed convallis, nunc non tincidunt elementum, nisi lorem laoreet lorem, a pretium arcu nulla ac ligula. Vivamus volutpat leo non turpis ultrices, nec interdum justo venenatis.",
      time: "12 hours ago",
      clap: 4,
      heart: 3,
      tears_of_joy: 5,
    },
    {
      id: 2,
      author: "Emma Davis",
      avatar: "https://pagedone.io/asset/uploads/1710238051.png",
      content:
        "Rutrum enim commodo est tristique vitae ut porta euismod cras. Id quis at donec duis scelerisque. Diam magnis adipiscing tellus sapien diam neque porta nullam lectus. Nullam imperdiet velit sit amet ipsum ullamcorper, non gravida velit tempus. Integer tristique mi id nisl hendrerit dapibus. Proin ac dui sit amet felis fringilla ultrices. Curabitur malesuada malesuada magna, in luctus magna malesuada et.",
      time: "2 days ago",
      clap: 4,
      heart: 3,
      tears_of_joy: 5,
    },
    {
      id: 3,
      author: "James Miller",
      avatar: "https://pagedone.io/asset/uploads/1710225753.png",
      content:
        "Lectus quis ac quis lectus elit. Dolor tortor eu tristique malesuada. Quis dictumst nulla vitae velit nisi. Etiam vitae quam sit amet ipsum efficitur vestibulum. Nam commodo sapien vel odio pulvinar, vel luctus enim scelerisque. Praesent ac nulla dictum, tincidunt turpis et, tincidunt dolor. Maecenas sit amet magna scelerisque, egestas ligula vel, hendrerit ante. Sed sit amet gravida erat, nec tempus odio.",
      time: "5 days ago",
      clap: 4,
      heart: 3,
      tears_of_joy: 5,
    },
  ]);
  

  const navigate = useNavigate();

  const handlePlusClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleReadMore = (comment) => {
    navigate(`/story/${comment.id}`, { state: { comment } });
  };

  const handleCommentSubmit = () => {
    console.log("Submitted comment:", commentText);
    setCommentText("");
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return `${text.slice(0, limit)}... `;
  };

  const handleEmojiClick = (commentId, emojiType) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, [emojiType]: comment[emojiType] + 1 }
          : comment
      )
    );
  };

  return (
    <section className="py-4 relative border border-solid border-[rgba(147, 0, 255, 0.10)] rounded-[10px] mt-5">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start lg:gap-3 gap-3 inline-flex">
          <div className="flex flex-row items-center w-full gap-4">
            <h2 className=" text-[30px] font-[600] leading-normal">
              Stories Unfold
            </h2>
            <div
              className={`w-8 h-8  rounded-full bg-[#4cb510] flex justify-center items-center transition-transform duration-300 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
              onClick={handlePlusClick}
            >
              <img
                className="w-4 h-4 filter-white"
                src="plus.png"
                alt="plus icon"
              />
            </div>
          </div>
          <div
            className={`w-full flex-col justify-start items-start gap-5 mt-3 flex overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[300px] opacity-100 mb-3" : "max-h-0 opacity-0"
            }`}
          >
            <textarea
              className="w-full p-5 rounded-[12px] border shadow-md resize-none placeholder-gray-400 bg-[#dddddd24] text-lg text-gray-900"
              placeholder="Share your story here..."
              rows="5"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <div className="flex justify-start items-center w-full">
              <div
                className="px-5 py-2.5 rounded-full w-full cursor-pointer bg-[#4db510] duration-200 items-center justify-center flex flex-row group"
                onClick={handleCommentSubmit}
              >
                <div className="h-full w-full rounded-full flex items-center justify-center">
                  <img
                    className="h-8 w-8 filter-white transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                    src="send.png"
                    alt="Send Icon"
                  />
                  <span className="absolute text-white text-lg font-semibold transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                    Post your story
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="w-full lg:p-8 p-5 bg-white rounded-[12px] border border-gray-200 flex-col justify-start items-start flex"
              >
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                        <img
                          className="rounded-full object-cover"
                          src={comment.avatar}
                          alt={`${comment.author} avatar`}
                        />
                      </div>
                      <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                          {comment.author}
                        </h5>
                        <h6 className="text-gray-500 text-xs font-normal leading-5">
                          {comment.time}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-800 text-sm font-normal leading-snug">
                    {expandedComments[comment.id]
                      ? comment.content + " "
                      : truncateText(comment.content, 100)}
                    {comment.content.length > 100 && (
                      <span
                        className="cursor-pointer"
                        onClick={() => toggleReadMore(comment)}
                      >
                        {expandedComments[comment.id] ? (
                          <span className="underline font-semibold text-[#4db510]">
                            Read Less
                          </span>
                        ) : (
                          <span className="underline font-semibold text-[#4db510]">
                            Read More
                          </span>
                        )}
                      </span>
                    )}
                  </p>
                </div>
                <div className="flex flex-row gap-2 mt-4">
                  <div
                    className="flex-row px-2 py-1 rounded-full bg-[#e9e9e9] flex gap-2 justify-center items-center cursor-pointer "
                    onClick={() => handleEmojiClick(comment.id, "clap")}
                  >
                    <div className="bg-white hover:scale-105 rounded-full justify-center items-center flex h-[30px] w-[30px]">
                      👏
                    </div>
                    <div className="rounded-full justify-center items-center flex p-[2px] w-4">
                      {comment.clap}
                    </div>
                  </div>

                  <div
                    className="flex-row px-2 py-1 rounded-full bg-[#e9e9e9]  flex gap-2 justify-center items-center cursor-pointer"
                    onClick={() => handleEmojiClick(comment.id, "heart")}
                  >
                    <div className="bg-white hover:scale-105 rounded-full justify-center items-center flex h-[30px] w-[30px]">
                      ❤️
                    </div>
                    <div className="rounded-full justify-center items-center flex p-[2px] w-4">
                      {comment.heart}
                    </div>
                  </div>

                  <div
                    className="flex-row px-2 py-1 rounded-full bg-[#e9e9e9] flex gap-2 justify-center items-center cursor-pointer"
                    onClick={() => handleEmojiClick(comment.id, "tears_of_joy")}
                  >
                    <div className="bg-white hover:scale-105 rounded-full justify-center items-center flex h-[30px] w-[30px]">
                    🥹
                    </div>
                    <div className="rounded-full justify-center items-center flex p-[2px] w-4">
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

export default StorySection;
