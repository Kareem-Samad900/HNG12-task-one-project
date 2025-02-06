import fetch from "node-fetch";

export const fetchFunfact = async (number) => {
  try {
    const res = await fetch(`http://numbersapi.com/${number}/math`);
    if (res.ok) {
      const data = await res.text();
      return data;
    } else {
      return "No funfact available";
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ "server error": +error.message });
  }
};
