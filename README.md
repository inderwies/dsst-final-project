---


---

<h1 id="senior-academy-final-project">Senior Academy: Final Project</h1>
<h2 id="the-basic-idea">The Basic Idea</h2>
<p>The final project for this course is to construct a web-based application of your choosing that meets the following criteria:</p>
<ul>
<li>The topic of the site should be one of significant personal interest to you</li>
<li>The site should incorporate the following technical criteria:
<ul>
<li>It should demonstrate <strong>competence with HTML and CSS</strong></li>
<li>It should consume a <strong>third-party API</strong> of the student’s choice</li>
<li>It should <strong>use JavaScript to manipulate the data returned from the API</strong> (ideally, it should use an accumulator pattern)</li>
<li>It should <strong>use jQuery</strong> to perform DOM-manipulation</li>
<li>It should meet the standards of MVP (minimum viable product) and appear reasonably complete for the end-user</li>
</ul>
</li>
<li>Your full working site should be <strong>committed to GitHub</strong> for review</li>
</ul>
<h2 id="grading-rubric">Grading Rubric</h2>
<p>You should choose goals to accumulate <em>at least</em> 100 points total. Each goal carries a max point value.</p>

<table>
<thead>
<tr>
<th>Goal</th>
<th>Points</th>
<th>Stretch Goal</th>
</tr>
</thead>
<tbody>
<tr>
<td>At least 4 pages of content that use HTML5 with semantic tagging</td>
<td>5</td>
<td>Use the canvas tag</td>
</tr>
<tr>
<td>A layout with effective use of the box model (properly-aligned <em>div</em> tags with margin, padding, clear, and float)</td>
<td>10</td>
<td>Use advanced CSS properties in the <em>animation</em>, <em>flexbox</em>, and/or <em>transitions</em> sections of <a href="http://cssreference.io.">CSS Reference</a></td>
</tr>
<tr>
<td>A single CSS3 stylesheet with classes and restyled HTML tags as appropriate (such as <em>ul</em>, <em>li</em>, <em>a</em> and so forth)</td>
<td>5</td>
<td>Use custom typefaces from Google Fonts; refer to the <em>typography</em> section of <a href="http://cssreference.io.">CSS Reference</a></td>
</tr>
<tr>
<td>Clear, logical navigation between pages</td>
<td>10</td>
<td>Implement a <a href="https://codepen.io/philhoyt/pen/ujHzd">drop-down menu</a> using pure CSS</td>
</tr>
<tr>
<td>Implement 2 or more JavaScript functions that provide</td>
<td>10</td>
<td></td>
</tr>
<tr>
<td></td>
<td>10</td>
<td></td>
</tr>
</tbody>
</table><h2 id="ideas-and-inspiration">Ideas and Inspiration</h2>
<ul>
<li>A recipes page where the users enters ingredients, the website hits an external api, and then brings back food data</li>
<li>A Google maps project where a user enters a specific address and Google maps returns a map with restaurants in the area of the address entered</li>
<li>A word game like hangman</li>
<li>A movie database finder where a user types in a movie and is returned movie posters, and can click on any result in order to view one single poster (may need to use the omdb api  … Galvanize has an api key for this if you need to use it)</li>
</ul>
<h3 id="optional-fruit-shop-api">Optional fruit shop api</h3>
<p>Alternatively, if you wish, you can choose to build a project based on a simple fruits api that we have prepared for you. Here’s how this works:</p>
<p>You will use a simple fruits api and your own creative ideas to put together some sort of store that sells fruit based products. The api has three very simple end points:</p>
<p><a href="https://agile-inlet-36787.herokuapp.com/get_fruits.json">https://agile-inlet-36787.herokuapp.com/get_fruits.json</a></p>
<p>…returns you a list of fruits</p>
<p><a href="https://agile-inlet-36787.herokuapp.com/get_fruit/1.json">https://agile-inlet-36787.herokuapp.com/get_fruit/1.json</a></p>
<p>…returns you a single fruit, and</p>
<p><a href="https://agile-inlet-36787.herokuapp.com/get_categories.json">https://agile-inlet-36787.herokuapp.com/get_categories.json</a></p>
<p>…returns you a list of categories that the fruits belong to.</p>
<p>This is not a ‘test’. It’s a collection of resources that you can use to build whatever you want</p>
<p>The repo provides you with some starter images for things like ice cream, smoothies, yogurt, bread boxes, etc. with blank labels that you can use to represent various products. The idea is that if an image is used as a background, you can then use javascript to place text on top of the label when the user “creates” the product. This is, of course, just an idea. Let your imagination guide you in order to come up with an idea of what you can do.</p>
<p>Here are some examples of things that you can build :</p>
<ul>
<li>An app that shows all of the fruit images at the top of the page. When you click on an image, that fruit icon is added to a new product that appears at the bottom of the page. The label is automatically filled out and a price for the drink is shown in a “checkout” field.</li>
<li>An app that categorizes all fruits according to category. When you click on a button it tells you the cost to purchase a case of fruit (however you want to define a case) of all of the fruits in each respective category.</li>
<li>An app where a customer defines the type of fruit she or her wants to purchase, and a bucket. If you click on a fruit and it does not belong to the target category, something bad happens. If this fruit is part of the target category, the image of that fruit is added to the bucket.</li>
<li>Anything else that you can think of to leverage the resources provided for you.</li>
</ul>
<p>Below is an example of functionality that you could build with the resources given to you. All of the images in the APIs above are high quality transparent pngs. You can link directly to the image links in the API.</p>
<p>The example below could be considered a stretch goal, as it includes some intricate functionality as it relates to the way all of these DOM elements work together:</p>
<h3 id="stock-images">Stock images</h3>
<p>Stock images for this repo can be found here : <a href="https://learn.galvanize.com/gSchool/javascript-curriculum/fundamentals/160_Final_Project/fruit_store_images/stock.md">Image Folder</a></p>
<p>p.s. yes : for anyone exploring the process of categorizing fruits using the categories api, a tomato is actually a berry !</p>
<h3 id="reference">Reference</h3>
<p>*p.p.s : you may need to add the CORS Chrome extension to make api calls to the heroku api listed above or any remote api that you’re hitting for the exercise. Google Allow-Control-Allow-Origin Chrome Extension and enable it in Chrome</p>

