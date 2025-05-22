import React from "react";
import { PaystackButton } from "react-paystack";

const ProductCard = ({ product }) => {
  const publicKey = "your_paystack_public_key"; // Replace with your real key
  const email = "buyer@example.com"; // Replace with dynamic value if needed

  const paystackProps = {
    email,
    amount: product.price * 100, // Convert to kobo (GHS to pesewas)
    metadata: {
      custom_fields: [
        {
          display_name: product.name,
          variable_name: "product",
          value: product.name,
        },
      ],
    },
    publicKey,
    text: "Buy Now",
    onSuccess: () => alert(`Payment for ${product.name} successful!`),
    onClose: () => alert("Payment closed."),
  };

  return (
    <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-3">GHS {product.price}</p>
        <PaystackButton
          {...paystackProps}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
        />
      </div>
    </div>
  );
};

export default ProductCard;
