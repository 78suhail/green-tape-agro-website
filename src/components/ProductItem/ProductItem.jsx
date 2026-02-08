import Link from "next/link";
import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Image from "next/image";

const ProductItem = ({ name, price, oldPrice, image, brand, rating }) => {
  return (
    <div className="productItem shadow-md w-full bg-white rounded-md ">
      <Link href={"/"} className="img overflow-hidden group flex p-4">
        <Image
          src={image}
          alt={name}
          width={200}
          height={180}
          className="w-full h-[180px] object-contain transition group-hover:scale-105"
        />
      </Link>

      <div className="info p-3 flex flex-col gap-1">
        <span className="text-[14px] text-gray-700">{brand}</span>

        <Link
          href={"/"}
          className="text-[15px] text-gray-800 hover:text-primary"
        >
          {name}
        </Link>

        <Rating name="read-only" value={rating} readOnly size="small" />

        <div className="flex items-center justify-between">
          <span className="text-green-700 text-[18px] font-semibold">
            ₹{price}
          </span>

          {oldPrice && (
            <span className="text-[#A4A4A4] text-[18px] font-semibold line-through">
              ₹{oldPrice}
            </span>
          )}
        </div>

        {/* <Button className="btn-border-g">Add to Cart</Button> */}
      </div>
    </div>
  );
};

export default ProductItem;
