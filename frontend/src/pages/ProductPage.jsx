import React from "react";
import {
  Button,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { Topbar } from "../components/topbar";
import nutmegt from '../assets/products/nutmeg.png';
import { useParams } from "react-router-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { spiceAtom } from "../assets/spices";

export function ProductPage() {
  const { id } = useParams();
  const product = useRecoilValue(spiceAtom).find((p) => p.id === parseInt(id));
  
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <RecoilRoot>
      <div className="">
        <Topbar />
        <section className="relative py-1 flex">
          <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <img
              src={nutmegt}
              alt="spices"
              className=" h-[400px] max-w-full"
            />
            </div>
            <div className=" mr-4">
              <div className="mt-3 bg-yellow-400 inline-block px-2 rounded-lg font-bold">
                {product['Category']}
              </div>

              <Typography className="" variant="h3">
                {product['Product Name']}
              </Typography>
              <div>
                {product['Brand Name']}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Rating value={4} className="text-amber-500" />
                <Typography className="!text-sm font-bold !text-gray-700">
                  {product['Customer Rating (out of 5)']} ({product['Number of Reviews']})
                </Typography>
              </div>
              <br />
              <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
                Nutmeg is a warm, aromatic spice derived from the seeds of the nutmeg tree, native to Indonesia. Known for its sweet, slightly nutty flavor, it's commonly used in baking, cooking, and beverages. Nutmeg also has potential medicinal benefits, aiding digestion and providing anti-inflammatory effects.
              </Typography>
              <br />
              <hr className="border border-gray-300" />

              <Typography variant="h5">
                <div className="mt-1 flex text-base font-light">
                  Price per unit:
                  <div className="ml-2 font-bold text-red-700">
                    ${product['Price per Unit ($)']}
                  </div>
                </div>
              </Typography>
              <div className="flex">
                Bulk Pricing (if applicable):
                <div className="ml-2 font-bold text-red-700">
                  ${parseFloat(product['Bulk Pricing (if applicable) ($)']).toFixed(2)}
                </div>
              </div>
              <div className="mb-4 flex w-full items-center gap-3 md:w-1/2">
                <Button className="bg-orange-400 mt-10 w-52 py-2 text-black text-md">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* SideBox - Fixed to the right */}
          <div className="hidden m-10 lg:block w-1/4 h-[500px] bg-white-100 border p-6 overflow-y-auto rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold">Product Details</h3><br />

            <div className="mt-4">
            <table className="w-full text-sm text-left rtl:text-right ">
              <tbody>
                <tr className="bg-gray-100">
                  <td className="py-3 px-6">Total Cost</td>
                  <td className="py-3 px-6">{parseFloat(product['Total Cost ($)']).toFixed(2)}</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-6">Available Quantity</td>
                  <td className="py-3 px-6">{product['Available Quantity']}</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="py-3 px-6">Min Order Quantity</td>
                  <td className="py-3 px-6">{product['Minimum Order Quantity']}</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-3 px-6">Pincode of Seller's Warehouse</td>
                  <td className="py-3 px-6">{product["Pincode of Seller's Warehouse (USA)"]}</td>
                </tr>
              </tbody>
            </table>
          </div> <hr /><br />
          Extra Details Go here

          </div>
        </section>
      </div>
    </RecoilRoot>
  );
}

export default function PRODUCT() {
  return (
    <RecoilRoot>
      <ProductPage />
    </RecoilRoot>
  );
}
