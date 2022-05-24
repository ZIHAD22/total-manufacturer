import React from "react";

const ReviewItem = () => {
  return (
    <div>
      <div className="my-10 mb-20 grid grid-rows-2">
        <div className="mx-auto block">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=92310"
                alt="no"
              />
            </div>
          </div>
          <h1 className="text-xl text-gray-600 text-center my-4">MD.ZIHAD</h1>
        </div>
        <div className="text-center">
          <p className="w-1/2  text-gray-600 mx-auto font-sans text-center">
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            adipisci nostrum ducimus nesciunt quod a minima accusantium suscipit
            omnis ipsa quae libero, soluta molestias distinctio. "
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
