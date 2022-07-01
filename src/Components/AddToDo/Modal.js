
const Modal = ({ date, name }) => {
  const modalFormSubmitData = (event) => {
    const name = event.target?.name.value;
    const date = event.target?.date.value;
    const massage = event.target?.massage.value;
    console.log(name, date, massage);
  };

  const onSubmit = (data) => {
    const url = `http://localhost:5000/todoList`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          alert("Your new item has been added");
        }
      });
  };
  return (
    <div>
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-[#5580a0] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#5580a0] hover:shadow-lg focus:bg-[#5580a0] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#5580a0] active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        ADD
      </button>

      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#5681A0] bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div className="block p-6 rounded-lg shadow-lg bg-[#5681A0] max-w-md">
                {/* /////////////////// Form //////////////////////////// */}
                <form onSubmit={modalFormSubmitData(onSubmit)} action>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-[#b3d4eb]
        bg-[#5681A0] bg-clip-padding
        border border-solid
        rounded
        transition
        ease-in-out
        m-0
        border-white outline-none focus:outline-none"
                      id="exampleInput7"
                      value={name}
                      name="name"
                      required
                      disabled
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-[#b3d4eb]
                      bg-[#5681A0] bg-clip-padding
                      border border-solid
                      rounded
                      transition
                      ease-in-out
                      m-0
                      border-white outline-none focus:outline-none"
                      id="exampleInput8"
                      value={date}
                      required
                      disabled
                      name="data"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-[#b3d4eb]
        bg-[#5681A0] bg-clip-padding
        border border-solid
        rounded
        transition
        ease-in-out
        m-0
        border-white outline-none focus:outline-none"
                      id="exampleFormControlTextarea13"
                      rows="3"
                      placeholder="Message"
                      required
                      name="massage"
                    ></textarea>
                  </div>
                  <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button
                      type="submit"
                      className="inline-block px-6 py-2.5 bg-[#5580a0] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:[#5580a0] hover:shadow-lg focus:bg-[#5580a0] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#5580a0]active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
