const NumberFormater = {
  formatBalance: number => {
    return number.toFixed(1).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
};

export default NumberFormater;
