import React from "react";
import Data from "./data.json";

export default function Ecomerse() {
  return (
    <>
      <div className="text">
        <h1>E-comerse web site</h1>
      </div>

      <div class="row">
        <div class="col-sm-4 mb-3 mb-sm-0">
          <h1 className="text3">Product information</h1>
          <div class="card1">
            <div class="card-body">
              <p className="card__name">
                <span>Name</span>details
              </p>
              <p className="card__total card__small">
                <h1>{Data.name}</h1>
              </p>
              <h1>{Data.product}</h1>
              <br />
              <h1>{Data.price}</h1>
            </div>
          </div>
        </div>

        <div class="col-sm-4 ">
          <h1 className="text1">Shipping Address</h1>
          <div class="card2">
            <div class="card-body">
              <p className="card__name">
                <span>Ship</span>Details
              </p>
              <p className="card__total card__small">
                <h1>{Data.name}</h1>
              </p>
              <h1>{Data.shipTo.address}</h1>
              <br />
              <h1>{Data.shipTo.city}</h1>
              <br />
              <h1>{Data.shipTo.state}</h1>
              <br />
              <h1>{Data.shipTo.zip}</h1>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <h1 className="text2">Delevery details</h1>
          <div class="card3">
            <div class="card-body">
              <p className="card__name">
                <span>Billing</span>Details
              </p>
              <p className="card__total card__small">
                <h1>{Data.name}</h1>
              </p>
              <h1>{Data.shipTo.address}</h1>
              <br />
              <h1>{Data.billTo.city}</h1>
              <br />
              <h1>{Data.billTo.state}</h1>
              <br />
              <h1>{Data.billTo.zip}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
