import { Link } from "@remix-run/react";
import React from "react";
import NewAddNoteDrawer from "../components/notes/NewAddNoteDrawer";

const NotesPage = () => {
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
          <label htmlFor="my-drawer" className="btn btn-success ">
            Add New Note
          </label>
          {/* <button ></button> */}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[85vw] grid grid-cols-4 my-10 gap-5">
          {[...Array(10)].map((item, i) => (
            <>
              <Link
                to={"/singlenote"}
                key={i}
                className="card w-96 bg-neutral text-neutral-content"
              >
                <div className=" p-10 items-center text-center">
                  <div className="flex justify-between items-center">
                    <h2 className=" ">Cookies!</h2>
                    <p className="text-sm">{new Date().toDateString()}</p>
                  </div>
                  <p className="text-left text-xs mt-5 mb-2">
                    Author : lalu mia
                  </p>
                  <div className="card-actions justify-end">
                    <p className="text-justify ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis deserunt neque fugiat enim perspiciatis qui!
                      Voluptatem placeat commodi numquam rerum?
                    </p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
      <NewAddNoteDrawer />
    </div>
  );
};

export default NotesPage;
