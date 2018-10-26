/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(
	(function() {
		describe('RSS Feeds', () => {
			it('are defined', () => {
				expect(allFeeds).toBeDefined();
				expect(allFeeds.length).not.toBe(0);
			});

			it('URLs are defined and not empty', () => {
				allFeeds.forEach((feed) => {
					expect(feed.url).toBeDefined();
					expect(feed.url).not.toBe('');
				});
			});

			it('names are defined and not empty', () => {
				allFeeds.forEach((feed) => {
					expect(feed.name).toBeDefined();
					expect(feed.name).not.toBe('');
				});
			});
		});

		describe('The menu', () => {
			const body = document.body;
			const menuIcon = document.querySelector('.menu-icon-link');
			it('is hidden by default', () => {
				expect(body.classList.contains('menu-hidden')).toBe(true);
			});

			it('should toggle class menu-hidden when menuIcon is clicked and when clicked again should hide', () => {
				menuIcon.click();
				expect(body.classList.contains('menu-hidden')).toBe(false);
				menuIcon.click();
				expect(body.classList.contains('menu-hidden')).toBe(true);
			});
		});

		describe('Initial Entries', () => {
			let feedEntries;
			beforeEach((done) => {
				loadFeed(0, () => {
					feedEntries = document.querySelectorAll('.feed .entry');
					done();
				});
			});

			it('have at least one entry after the loadFeed function is done', () => {
				expect(feedEntries.length >= 1).toBe(true);
			});
		});

		describe('New Feed Selection', () => {
			let feedEntries;
			beforeEach((done) => {
				feedEntries = document.querySelectorAll('.feed .entry')[0].innerText;
				loadFeed(1, done);
			});
			it('have changed the content in the website', () => {
				expect(document.querySelectorAll('.feed .entry')[0].innerText).not.toBe(feedEntries);
			});
		});
	})()
);
