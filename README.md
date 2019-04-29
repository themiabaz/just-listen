# Hi! Thanks for checking out just listen!

The idea for just listen came from my experience with barbershop singing.
When you sing one note, the vibrations of your vocal cords produce additional sound, known as overtones, above the fundamental frequency.
Good a cappella harmony "locks and rings" when the overtones of all four notes reinforce each other, but it won't work if the chord isn't in tune with its own overtone series using just intonation.
At present, apps can play back four-part harmony using equal temperament, which "dirties" the sound by forcing all twelve notes in an octave to be equally-sized and equally-spaced. This is practical...if you’re a piano.
It's a subtle difference, but a cappella singers who rely on learning music by rote are often unaware of this phenomenon and miss out on the opportunity to train their ears to a more acute pitch.
That is the problem that just listen intends to solve.

# Architecture

The app architecture is simple, using a few functions and a React form with hooks (which was introduced late into the 4-day Stackathon when redux wasn't playing nice). Except for setting up the server, everything is on the front end. You should be able to fork and clone this repo, npm install, and npm run start-dev to get up and running on a localhost.

# Bugs

The biggest bug is getting the audio context to reset; at present, it'll play your chord, but you won't be able to hear it again unless you reset the page (and re-add the inputs).

Also, the form itself may be too simple; I'm new to React Hooks, so with more time I might have been able to use my form data more effectively and in more components.

# Future Features
