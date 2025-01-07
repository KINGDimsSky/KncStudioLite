import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../hooks/useCart';

const AddToCartButton = ({ product }) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    addItem(product);
    setIsSuccess(true);
    toast.success('Successfully added to cart!', {
      duration: 2000,
    });
  };

  return (
    <button onClick={handleClick} className="w-full bg-violet-600 py-4 rounded-full text-white hover:bg-violet-500 transition-colors">
      {isSuccess ? 'Added!' : 'Add to cart'}
    </button>
  );
};

export default AddToCartButton;
