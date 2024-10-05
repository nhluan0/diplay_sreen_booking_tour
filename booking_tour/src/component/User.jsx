import React from 'react'

const User = ({ title, data }) => {
  return (
    <div className="border border-primary">
      <h2 className="text-center text-primary text-uppercase my-2">{title}</h2>
      <div className="row p-3 gy-3 gx-3">
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <div
                className="card col-sm-6 col-md-4 d-flex flex-column  "
                key={index}
              >
                <div
                  className="flex-grow-1 border border-black"
                  style={{ flexBasis: '80%' }}
                >
                  <img
                    src={item.url}
                    style={{ height: 'auto', width: '100%' }}
                    className="d-block"
                  ></img>
                </div>
                <div className="">
                  <hr className="text-danger"></hr>

                  <h5 className="text-uppercase my-4 text-center text-danger ">
                    {item.title}
                  </h5>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default User
