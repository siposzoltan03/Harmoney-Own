const NumberFormatter = {
  formatBalance: number => {
    return number.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};

export default NumberFormatter;
