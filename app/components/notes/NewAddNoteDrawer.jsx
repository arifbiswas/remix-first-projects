import React from "react";

const NewAddNoteDrawer = () => {
  return (
    <div className="w-[40vw]">
      <div className="drawer ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-[40vw]">
          {/* Page content here */}
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="my-10 gap-5 flex flex-col">
              <input
                type="text"
                placeholder="title"
                className="input input-bordered w-full max-w-xs"
              />
              <textarea
                type="text"
                placeholder="description"
                className="input input-bordered w-full h-28 max-w-xs"
              />
              <label htmlFor="my-drawer" className="btn btn-success">
                Save
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAddNoteDrawer;
