import React from "react";
import { Card } from "flowbite-react";

function Item() {
  return (
    <div className="container mt-[-50px] mx-auto">
      <Card>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-4">
          <Card>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <img src="" alt="" />
              </div>
              <div>asdas</div>
            </div>
          </Card>
          <Card>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <img src="" alt="" />
              </div>
              <div>asdas</div>
            </div>
          </Card>
          <Card>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <img src="" alt="" />
              </div>
              <div>asdas</div>
            </div>
          </Card>
          <Card>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <img src="" alt="" />
              </div>
              <div>asdas</div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
}

export default Item;
