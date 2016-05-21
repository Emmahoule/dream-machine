var dest = "./assets";
var src = './src';

module.exports = {
  sass: {
    src: src + "/sass/*.{sass,scss}",
    dest: dest + "/stylesheets/",
    settings: {
      indentedSyntax: true, 
      imagePath: 'images'
    }
  },
  javascript: {
    src: src + "/javascript/**.{javascript,js}",
    dest: dest + "/javascript/"
  }
};
