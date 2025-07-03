# Instruction
## How to run project locally
Clone the repository:
git clone https://github.com/bydoodle/test-task.git
Set dependecies:
npm install
Run project:
npm run dev

After that click on a link(Ctrl + LMB) in terminal.

## How to build the final files
Build project:
npm run build

After that, a /dist folder will appear in the project folder.

# Description
The project used the recommended Swiper.js libraries to implement the slider on the second scene and GSAP for CTA button animation. The Vite compiler was used for assembly.

The project was built using object-oriented programming principles. Each scene is implemented in a separate class that inherits from the BaseScene base class, which provides basic functionality.

A separate orientation.js module was created to track screen orientation in the mobile version. Logging to the console is implemented directly in existing functions to prevent code duplication.

Since the technical specifications did not specify what should be on the first scene, I added two images (headline.png and shadow.png), a list of tools used, and a countdown timer before switching to the next scene.

Transitions between scenes are accompanied by smooth animations of appearance and disappearance by changing the transparency and scale of elements. 
