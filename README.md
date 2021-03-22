# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Zubair Shaik**

Time spent: **3** hours spent in total

Link to project: (https://glitch.com/edit/#!/site-project)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![X](https://media.giphy.com/media/ClbprdMK6Q92S4Jy5t/giphy.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[I used some references for CSS with the css references website linked, as well as the W3 schools website for some HTML elements.]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[Having done web development in the past by learning on the side of my college courses, I was able to get past the first couple of steps with ease. Setting up the HTML tags, along with the CSS selectors and declarations was the easy part for me definitely. Something that was a little new to me was the CSS hidden class, and you can manipulate certain elements to have their display set to none when it meets certain conditions. The JavaScript functions to start and stop the game, as well as initializing the various global constants and variables didn’t cause me trouble at all. When I got to the playing a sequence of clues step, the for loop inside that function seemed a little confusing to me initially. I had to take a step back and look at what was being performed in each step and trace each line till the next iteration of the for loop was being called. The setTimeout function was definitely a little unfamiliar so I went on the W3 schools website and looked up the specific function and went through all the examples, and tried them out for myself, it had for that function. Once the function’s functionality and implementation were clear to me, I went back to the for loop and was able to finally understand every single line of code within the loop. Another area of unfamiliarity for me was handling the guessing logic and implementing the code for that. I had to understand what exactly it meant when the guess was correct and how it matched with what the pattern array had, by playing around with the guess function and what each number represented in the pattern array I was able to figure out how they both were used in figuring out the correct guess. The rest of the checks inside correct guess were straightforward and did not need much time to spend on them. These were the small challenges that I faced as I was building this project, and I can definitely say I learned a lot throughout.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[Completing this project was a great introduction to the world of web development, and I have gained a lot of insight into this through this project as well as several personal endeavors I have made throughout my short time in college. I am currently in the process of making a full stack web application, and so have some familiarity with the topics frequently discussed and used in industry but would always love to learn more and gain more experience. I would love to learn more about how testing works and is implemented in the industry, along with what software and tools are necessary for testing. Additionally, to what degree is the used in things like deployment and hosting, as well as just learning more about how the cloud is being used within the industry and what are some popular suppliers. What is considered clean code and how would one go about being able to write more efficient and cleaner code would be an interesting question. I would also like to know what specifically backend engineers specialize in as opposed to front end engineers, and if full stack engineers are viable or if they're fitting too many hats at once. Finally, what CSS libraries are favored and more prevalent in the industry if they are used at all is another question. These are just some of the questions that I thought of in a short period of time, and I would love to be able to learn from the engineers at workday if selected.]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[If I spent a couple more hours on this project, I would refactor my code where each specific functionality would be separated into its own function in order to maintain clean code. Additionally, I would incorporate a timer for the user to make guesses before the timer runs out otherwise the user loses the game. To implement this feature, I would use a setInterval method and call this method as soon as the clue sequence ends, and let it count down until the user guesses right or runs out of guesses where then the clearInterval method would be called. I would also like to add some more animations within the project, specifically making the alert into a stylized popup component rather than the browser window alerting the user, this could most definitely be accomplished if I moved this project into a react application and create multiple components to do specific functions and tasks and make this project more interactive and have a web application feel to it. With the project being a react web app, I would then be able to import CSS libraries, my personal favorite being tailwind ui, and really stylize the app to be more modern looking and of a more professional grade. I would then be able to add a couple more pages within the app, for example a standalone welcome and start game page, as well as an ending and play game again page. These are just some of the ideas that came across my mind as I was building this project.]



## License

    Copyright [Zubair Shaik]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.