import React from "react";

const BlogsPage = () => {
  return (
    <div>
      <div className=" flex justify-center my-10 ">
        <div className="flex items-start gap-5">
          <input
            type="text"
            placeholder="search text type .."
            className="input input-bordered input-accent w-[35vw]"
          />
          <button className="btn btn-success">Search</button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[85vw] grid grid-cols-4 my-10 gap-5">
          {[...Array(10)].map((item, i) => (
            <>
              <div
                key={i}
                className="card w-96 bg-neutral text-neutral-content"
              >
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">
                      title : Wow ! One of My favorite Cartoon Movie
                    </h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Iusto voluptas autem eius nihil eligendi repellendus
                      distinctio molestias expedita, quod praesentium.
                    </p>
                  </div>
                  <figure>
                    <img
                      src="https://cdn.wallpapersafari.com/11/6/geByXN.jpg"
                      alt="Shoes"
                    />
                  </figure>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
