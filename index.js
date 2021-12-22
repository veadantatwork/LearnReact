let india = {
  //add property
  mountains: ['Aravali', 'Western Ghats', 'Eastern Ghats'],

  //add method
  printWithDash: function () {
    setTimeout(() => console.log(this.mountains.join('-')), 3000);
  },
};

india.printWithDash();
