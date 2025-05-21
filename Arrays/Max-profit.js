// Max Profit

// Imagine you are buying and selling stocks throughout the year
// Your job is to find the biggest profit you could make by buying low
// and selling high only once

// Here's what you're given
// A list of stock prices for each day 👉 [7,1,5,3,6,4]

// Here's what you need to find:
// The difference between the cheapest prices you could have bought the stock and the most expensive price you could have sold it later on

const MaxProfit = (prices) => {
  let minimumPrice = prices[0]; // Assuming the first price to be minimum

  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    minimumPrice = Math.min(minimumPrice, prices[i]);
    let currentProfit = prices[i] - minimumPrice;
    maxProfit = Math.max(currentProfit, maxProfit);
  }
  console.log(maxProfit);
};
const arr = [7, 1, 5, 3, 6, 4];
MaxProfit(arr);
