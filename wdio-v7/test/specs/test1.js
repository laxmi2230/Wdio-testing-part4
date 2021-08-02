


describe('works correctly', () => {
    it('should give correct output', () => {
    browser.url("https://content.werally.com");
    browser.debug();
   // browser.getLogs('browser');

     
})
})
//Aim to capture browser console errors (not manually)
//Process -- Command -- browser.getLogs('browser') in browser.debug()(library**)
//1st one browser console error (same as tested when inpected manually)
//http://localhost/dog.html (random created html page testing)
//OUTPUT
//[
  //  {
    //  level: 'SEVERE',
    //  message: 'http://localhost/favicon.ico - Failed to load resource: the server responded with a status of 404 (Not Found)',
    //  source: 'network',
    //  timestamp: 1627883624249
    //}
  //]


//2nd one browser console error (same as tested when inpected manually)
//https://content.werally.com
//OUTPUT
// [
  //{
   // level: 'SEVERE',
   // message: 'https://member.werally.com/assets/fonts/HelveticaNeue.otf - Failed to load resource: the server responded with a status of 404 ()',
    //source: 'network',
  //  timestamp: 1627884057112
  //},
 // {
   // level: 'SEVERE',
    //message: 'https://member.werally.com/assets/fonts/HelveticaNeue-Medium.otf - Failed to load resource: the server responded with a status of 404 ()',
    //source: 'network',
    //timestamp: 1627884057112
 // },
 // {
   // level: 'SEVERE',
  //  message: 'https://member.werally.com/assets/fonts/HelveticaNeue-Bold.otf - Failed to load resource: the server responded with a status of 404 ()',
   // source: 'network',
   // timestamp: 1627884057112
//  }
//]

//3rd one browser console error (same as tested when inpected manually)
//https://www.google.com
//OUTPUT
// RESULT []
// as it contains no error in browser console log so it show result array as empty 