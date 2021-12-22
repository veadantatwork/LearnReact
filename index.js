let india = {
  //add property
  mountains: ['Aravali', 'Western Ghats', 'Eastern Ghats'],

  //add method
  printWithDash: function () {
    setTimeout(function () {
      console.log('inside setTimeout', this);
      //console.log(this.mountains.join('-'));
    }, 3000);
  },
};

india.printWithDash();
