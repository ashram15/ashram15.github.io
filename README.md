# TestTrack Website
A Covid-19 Testing Tracker Website.
By Aishwarya Ramesh and Aarushi Ramesh

## Won "Best Beginner Hack" in Bay Area Hacks 2020: 
<a href="https://devpost.com/software/testtrack">Hackathon Link</a>

![Test Track Main Page](/TestTrackMainPage.jpg)

**Inspiration**
With the COVID-19 pandemic increasing in scale, testing has become extremely crucial in containing and tracking this virus. Recently, there has been a significant demand in testing and it has become extremely hard for people to find testing centers and efficiently get themselves tested. After reading these headlines every day, we wanted to provide a way to make it easier for the public to locate the closest COVID-19 centers and get tested right away in an efficient manner.

**What it does**
![Test Track Process](/testtrackprocess.png)

TestTrack is a website that will help people keep track of the coronavirus testing locations around their area. The website will prompt the user to type in their zip code or address and will call certain Maps API’s to locate the closest COVID-19 testing locations. We will also specify the wait time allocated with each close testing location in order for them to optimize their time and get tested as soon as possible. We will observe the wait times by using the google distance matrix api at the user’s particular time. The wait times depend on the time that the user uses the website; for a more accurate result, the user can also use the website right when they reach the center to see the wait times at that exact time.

**How we built it**
Website and Front End: We used HTML code to build the basics of the website Using CSS and JavaScript, we stylized our website and made it more contemporary in order to appeal to more people and make our website more professional. We also used php and javascript validators to provide a contact section to our website, allowing the user to input any questions or notes they may have about our project.

Back End: Maps/Search Queries for COVID-19 Testing centers: To display and configure a world map in our website, we used the Google Maps Javascript API. Using the Geocoding API, the search function converts an address or zip code to longitude and latitude coordinates (using an HTTP request). Another API we used is the Places Search API, that showcases the close proximity COVID-19 testing locations within a specific area. Using the Distance Matrix API to Calculate waiting times..

Challenges we ran into
Integrating 3 different APIs was a difficult process for us because we had to make sure all of them were in the right order. It was also difficult establishing the correct margins and troubleshooting several times to achieve the best view and layout for our website. Also, while integrating api's, it was difficult to combine them into our html code and it took a while for us to achieve what we wanted.

**Accomplishments that we're proud of**
We are proud of all that we have learned from TestTrack, from Google API's to Php servers. In addition, we are proud of the idea that we had to help all of the people around the world deeply affected by this pandemic and how our simple idea can in fact change some lives around our nation.

**What we learned**
After this week, we learned a lot about API’s, libraries, Php systems, and other important systems and elements of coding that we wouldn’t have known about before. We are mainly proud of what TestTrack has taught us in terms of website design, libraries, etc and we wish to take that with us to further projects.

**What's next for TestTrack!**
Once we become sure of the fact that our website works for everyone around our nation, our goal is to make TestTrack into an app in addition to our website. Through this, more and more people can have access to our project and we can further help people around the US get tested as soon as possible and find their desired testing center within minutes. In addition, we wish to further develop our wait times software and make it more functional to regular public in order for them to use it with ease.
