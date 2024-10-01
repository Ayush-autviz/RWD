import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const StorySectionDonor = () => {
  const [commentText, setCommentText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [expandedComments, setExpandedComments] = useState({});
  const [comments, setComments] = useState([
    {
      id: 1,
      npo: "Grocery Spot",
      author: "Luke Warm",
      avatar: "/userp.jpg",
      avatarDonor: "/donor-unsplash.jpg",
      content:
        "In vestibulum sed aliquet id turpis. Sagittis sed sed adipiscing velit habitant quam. Neque feugiat consectetur consectetur turpis. Curabitur laoreet turpis non purus luctus, at cursus metus elementum. Etiam vel nunc ultricies, gravida tortor a, facilisis ipsum. Integer in odio convallis, feugiat elit sed, ultricies augue. Suspendisse eget orci sed ligula fermentum commodo sit amet ac felis. Donec eget magna a odio convallis interdum. Proin ac consectetur erat. Nam viverra metus ut justo aliquet accumsan.",
      time: "12 hours ago",
      clap: 4,
      heart: 3,
      tears_of_joy: 5,
    },
    {
      id: 2,
      npo: "Grocery Spot",
      author: "Luke Warm",
      avatar: "/userp.jpg",
      avatarDonor: "/donor-unsplash.jpg",
      content:
        "Rutrum enim commodo est tristique vitae ut porta euismod cras. Id quis at donec duis scelerisque. Diam magnis adipiscing tellus sapien diam neque porta nullam lectus. Morbi tempus libero sed justo posuere, id faucibus metus gravida. Phasellus consequat ipsum id nulla tempus, sit amet ultrices enim congue. Aenean ac nibh ut purus scelerisque dapibus vel sit amet urna. Duis suscipit dui vitae diam gravida, nec blandit tortor finibus. Nulla consectetur risus vel augue tincidunt, ac iaculis felis facilisis.",
      time: "2 days ago",
      clap: 4,
      heart: 3,
      tears_of_joy: 5,
    },
    {
      id: 3,
      npo: "Grocery Spot",
      author: "Luke Warm",
      avatar: "/userp.jpg",
      avatarDonor: "/donor-unsplash.jpg",
      content:
        "Lectus quis ac quis lectus elit. Dolor tortor eu tristique malesuada. Quis dictumst nulla vitae velit nisi. Proin viverra lectus ac purus efficitur, non cursus lorem interdum. Quisque eget augue scelerisque, feugiat magna sed, congue eros. Suspendisse potenti. Integer sagittis volutpat mauris, non consectetur ipsum dapibus ut. Sed et purus ac dolor suscipit tincidunt sit amet quis lectus. Cras lobortis orci id nisi posuere, sit amet molestie arcu tincidunt. Integer eget magna nec ligula luctus aliquet.",
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
              My Stories
            </h2>
          </div>
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="w-full lg:p-8 p-5 bg-white rounded-[12px] border border-gray-200 flex-col justify-start items-start flex"
              >
                <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                  {/* <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                      <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                        <img className="rounded-full object-cover" src={comment.avatar} alt={`${comment.author} avatar`} />
                      </div>
                      <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <h5 className="text-gray-900 text-sm font-semibold leading-snug">{comment.author}</h5>
                        <h6 className="text-gray-500 text-xs font-normal leading-5">{comment.time}</h6>
                      </div>
                    </div>
                  </div> */}
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
                      😂
                    </div>
                    <div className="rounded-full justify-center items-center flex p-[2px] w-4">
                      {comment.tears_of_joy}
                    </div>
                  </div>
                </div>
                <div className="w-full justify-between items-center  mt-4">
                  <div className="justify-start w-full items-center gap-2.5 flex">
                    <div className="w-10 h-10  justify-start items-start ">
                      <img
                        className="rounded-full object-cover h-full w-full"
                        src={comment.avatarDonor}
                        alt={`${comment.author} avatar`}
                      />
                    </div>
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                      <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                        {comment.npo}
                      </h5>
                      <h6 className="text-gray-500 text-xs font-normal leading-5">
                        {comment.time}
                      </h6>
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

export default StorySectionDonor;
