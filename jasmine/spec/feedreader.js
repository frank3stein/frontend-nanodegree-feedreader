// Loading the test function after the page is done and invoking it immedeately.
$(function () {
  // First test suite checking for RSS Feeds
  describe('RSS Feeds', function() {
    // The test checking if RSS feeds are defined and not empty
    it('are defined', function() {
      //Defined check
      expect(allFeeds).toBeDefined();
      //Not empty array check
      expect(allFeeds.length).not.toBe(0);
    });
    // Second test checking if feed urls are defined and not empty
    it('\' URLs are defined and not empty', function() {
      // Running the test for each item in allfeeds object
      // the test passes only if all of the conditions are met
      allFeeds.forEach(function(feed) {
        // Defined check
        expect(feed.url).toBeDefined();
        // Not empty string check
        expect(feed.url).not.toEqual('');
      });
    });

    //  Third test checking if feeds have a name property
    //  defined and it is not empty
    it(' have defined names and they are not empty',function(){
      // Running the test for each item in allfeeds object
      // the test passes only if all of the conditions are met
      allFeeds.forEach(function(feed){
        // Defined check
        expect(feed.name).toBeDefined();
        // Not empty string check
        expect(feed.name).not.toEqual('');
      });
    });
  });
  // Second test suite containing menu tests
  describe("The menu", function(){
    // First test checking if the menu is hidden by default
    it("is hidden by default", function(){
      /*There are two ways to have an object hidden according to the css
      Although hidden is only needed here we check for both as both
      properties give an element hidden property they may be used
      interchangeably.*/
      expect($("body").hasClass("hidden") || $("body").hasClass("menu-hidden")).toBe(true);
    });

    /*Second test checking if hidden property changes when menu icon is clicked
    Used a source:
    https://gist.github.com/davilious/9503539 Using trigger functionality
    of jquery to trigger the click event two times on the icon
    As we use trigger the test suite tests for click event itself
    */
    it ("should toggle class menu-hidden when menuIcon is clicked", function(){
      $trigger = $('.menu-icon-link');
      $body = $('body');
      // Click first time to toggleClass menu-hidden off
      $trigger.trigger('click');
      // Checking menu-hidden is actually off
      expect($body.hasClass('')).toBe(true);
      // Click second time to toggleClass menu-hidden on
      $trigger.trigger('click');
      // Checking if menu-hidden is back on
      expect($body.hasClass('menu-hidden')).toBe(true);
    });
  });
  // Third test suite checking for Initial entries
  describe('Initial entries', function(){
    // Before we run the test creating some variables and assigning values
    var $feedArray = [],
    $newFeedArray;
    beforeEach(function(done){
      // Loading first items in the feed array
      loadFeed(0, function(){
        // Grabbing the items
        $feedArray = $('.feed .entry');
        done();
      });
    });
    // Checking after loading the feed if the feed is not empty and has at least one item
    it('have at least one entry after the loadfeed function is done', function(done){
      // Expecting $feedArray not to be empty and has at least 1 item in it
      // Loading asynchronously ---> done();
      expect($feedArray.length >= 1).toBe(true);
      done();
    });
    // !! The last test suite could be included in the previous tests as they share
    // !! beforeeach section but left seperate as defined in the project
    // !! as more functionality could be added in the future keeping them seperate is better.

  });

  //Last test suite for the New Feed Selection process
  describe('New Feed Selection',function(){
    // Before we run the test creating some variables and assigning values
    var $feedArray;
    // First capturing 0 element of Feed array then, loading the first feed asynchronously
    beforeEach(function(done){
      $feedArray = $(".feed .entry").text();
      loadFeed(1, done);
    });
    // The test to check if the content changes in the website
    it("have changed the content in the website", function(done){
      expect($(".feed .entry").text()).not.toBe($feedArray);
      done();
    });
  });
}());
