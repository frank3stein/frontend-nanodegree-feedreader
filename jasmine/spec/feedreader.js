/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('\' URLs are defined and not empty', function() {
            allFeeds.forEach(function(feed) {
              expect(feed.url).toBeDefined();
              expect(feed.url).not.toEqual('');
            });
        });
        // function urlTests(i){
        //   it ('have URL'+'['+i+']'+' defined and property is not empty', function(){
        //
        //       expect(allFeeds[i].url).toBeDefined();
        //       expect(allFeeds[i].url).not.toEqual('');
        //
        //   });
        // }
        // for (var i; i<allFeeds.length; i++){
        //   console.log(i);
        //   urlTests(i);
        // }
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it(' have defined names and they are not empty',function(){
            allFeeds.forEach(function(feed){
              expect(feed.name).toBeDefined();
              expect(feed.name).not.toEqual('');
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function(){

      it("is hidden by default", function(){
        expect($("body").hasClass("hidden")||$("body").hasClass("menu-hidden")).toBe(true);
      });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        /*  https://gist.github.com/davilious/9503539 Using trigger functionality
        of jquery to trigger the click event two times on the icon
        */
         it ("should toggle class menu-hidden when menuIcon is clicked", function(){
            $trigger=$('.menu-icon-link');
            $body = $('body');
            // click first time toggleClass
            $trigger.trigger('click');
            expect($body.hasClass('')).toBe(true);

            // click second time
            $trigger.trigger('click');
            expect($body.hasClass('menu-hidden')).toBe(true);
          });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
