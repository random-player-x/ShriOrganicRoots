import { atom } from "recoil";

// Utility function to get the cart from localStorage as an array of integers
const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart).map(Number) : []; // Ensure IDs are integers
};

// Utility function to save the cart to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart)); // Store array of integers as JSON
};

// Recoil atom for cart state
export const cartAtom = atom({
  key: 'cartAtom',
  default: getCartFromLocalStorage(),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newCart) => {
        if ( cartAtom.includes !== newCart){
            saveCartToLocalStorage(newCart); // Save the updated cart to localStorage
        }
      });
    },
  ],
});
