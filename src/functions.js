
export const getDate = () => {
  const today = new Date();
  const month  = String(today.getMonth()+1);
  const day = String(today.getDate());
  const date = today.getFullYear()+'-'+(month.length === 2 ? month : '0'+ month)+'-'+(day.length === 2 ? day : '0'+ day);
  return date;
};

const roundPlus = (x, n) => {
  if(isNaN(x) || isNaN(n)) return false;
  const m = Math.pow(10,n);
  return Math.round(x*m)/m;
}

const getRandomOdd = () => roundPlus((Math.random() * (5 - 1.01) + 1.01),2)

export const getBets = () => {
  return  [
    {
      "name": "Match Winner",
      "values": [
        {
          "value": "Home",
          "odd": getRandomOdd()
        },
        {
          "value": "Draw",
          "odd": getRandomOdd()
        },
        {
          "value": "Away",
          "odd": getRandomOdd()
        }
      ]
    },
    {
      "name": "Goals Over/Under",
      "values": [
        {
          "value": "Over 3.5",
          "odd": getRandomOdd()
        },
        {
          "value": "Under 3.5",
          "odd": getRandomOdd()
        },
        {
          "value": "Over 1.5",
          "odd": getRandomOdd()
        },
        {
          "value": "Under 1.5",
          "odd": getRandomOdd()
        },
      ]
    }
  ]
}

export const changeButtonState = (button,state) => {
    button.current.disabled=state;
};

