***Programming Task Brief: Refill Impact Dashboard***

**Objective:**
Create a Vue.js application that allows users to input a number of water refills and calculates the environmental impact in terms of plastic bottles saved, kilograms of plastic saved, and kilograms of carbon dioxide saved. The results should animate to count up to the final value when the user presses "calculate impact". Additionally, include a "share impact" feature using Firebase.

_Mum Explanation_: This program shows the positive environmental impact you've had when refilling your water bottle (plastic bottles saved + kgs of plastic/CO2 saved) upon entering the amount of times you've refilled your glass/bottle and pressing a button. Also, if you want to, you can share this info with friends + family via another button.

**Key Features:**
- User Input for Refills: A text box at the top where users can enter the number of refills.

- Calculate Impact Button: Upon clicking, the app calculates the environmental impact.

- Impact Display: Show calculated data in three separate boxes:
  * Number of 33 ml bottles saved (2 bottles per refill).
  * Kg of plastic saved (use an approximation, e.g., 0.012 kg per bottle, with a source for this estimate).
  * Kg of carbon saved (use an approximation, e.g., 0.08 kg CO2 per bottle, with a source for this estimate).

- Count Up Animation: Animated counting to the calculated numbers upon calculation.

- Share Impact: A button that generates a unique link showing the calculated impact, with a "copy" button to share the link

**Technical Requirements:**
- Use Vue.js for the frontend.
- Utilize [Firebase](https://firebase.google.com/) for generating and managing unique shareable links.
- Ensure the application is responsive and user-friendly.
- Write clean and well-documented code

**Deliverables:**
- A functioning Vue.js application.
- Source code with a README on GitHub explaining setup and operation.
- Deployment on a suitable platform (maybe Firebase hosting?)
- A github repository showing all the commits

**Evaluation Criteria:**
- Functionality: All key features work as expected.
- Code Quality: Code is clean, well-organized, and well-documented.
- User Experience: The application is intuitive and easy to use.
- Creativity: Innovative approach to displaying and sharing the environmental impact


----
JS console.log func.
function log(input) {
		console.log(input);
	}

  npm run dev -> see live output