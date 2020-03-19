const NumberFormater = {
  formatBalance: number => {
    return number.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }
};

export default NumberFormater;
