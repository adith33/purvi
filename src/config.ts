/**
 * =======================================================================
 * 🌸 FARHA'S BIRTHDAY SURPRISE - EASY ASSET & CONTENT CONFIGURATION
 * =======================================================================
 * 
 * Hi Adith! You can easily customize files and messages here:
 * 
 * 1. ASSETS IN THE /public FOLDER:
 *    - Place Farha's first photo at:         /public/photo1.jpg
 *    - Place Farha's second photo at:        /public/photo2.jpg
 *    - Place your custom landscape image at: /public/landscapeimg.jpg
 *    - Place your custom birthday banner at: /public/happy-birthday-farha.png
 *    - Place her favorite song at:           /public/farha-song.mp3
 * 
 * 2. EDITING MESSAGES:
 *    - You can edit any text below directly.
 *    - "Farha Madam" is used playfully just once or twice as requested.
 * =======================================================================
 */

import { BirthdayConfig } from './types';
import photo1 from './assets/photos/photo1.jpg';
import photo2 from './assets/photos/photo2.jpg';
import photo3 from './assets/photos/photo3.jpg';
import landscapeImg from './assets/photos/landscapeimg.jpg';
import babyDollSong from './assets/media/baby-doll-song.mp3';
import farhaSong from './assets/media/farha-song.mp3';
import introVideo from './assets/media/intro-video.mp4';

export const BIRTHDAY_CONFIG: BirthdayConfig = {
  // Names
  recipientName: "Farha",
  playfulNickname: "Farha Madam",
  senderName: "Adith",

  // -------------------------------------------------------------
  // 📸 FILE ASSETS (Vite-bundled with automatic content hashing)
  // -------------------------------------------------------------
  photo1Url: photo1,
  photo2Url: photo2,
  photo3Url: photo3,
  landscapeImgUrl: landscapeImg,
  birthdayImageUrl: landscapeImg,
  songUrl: babyDollSong, // The newly uploaded song (Selected by default)
  song2Url: farhaSong, // The existing song (Secondary option)
  introVideoUrl: introVideo,

  // -------------------------------------------------------------
  // 🎀 SCREEN 1: OPENING
  // -------------------------------------------------------------
  opening: {
    greeting: "Hey Farha… 🌸",
    subheading: "I made something for you.",
    ctaText: "Open Your Surprise 💗",
  },

  // -------------------------------------------------------------
  // 🌷 SCREEN 2: WELCOME
  // -------------------------------------------------------------
  welcome: {
    title: "Welcome, Farha 💗",
    intro: "Okay Farha… your little birthday surprise officially starts here... 😌🌸",
    instruction: "Scroll slowly... I actually put some effort into this...",
  },

  // -------------------------------------------------------------
  // 📸 SCREEN 3: FIRST PHOTO CINEMATIC REVEAL
  // -------------------------------------------------------------
  photo1Section: {
    captionTitle: "That Eyes. ❤️",
    captionSubtitle: "Honestly, you make this too easy. 😌🌸",
  },

  // -------------------------------------------------------------
  // 💗 SCREEN 4: APPRECIATION CARDS
  // -------------------------------------------------------------
  appreciation: {
    title: "A Few Things I Appreciate About You… 🌸",
    cards: [
      { id: "app-1", text: "Your smile ❤️" },
      { id: "app-2", text: "Your kindness 🌸" },
      { id: "app-3", text: "Your random conversations and Kids vidoes 😂" },
      { id: "app-4", text: "The way you make ordinary moments memorable ✨" },
      { id: "app-5", text: "The way you motivate people around you." },
      { id: "app-6", text: "The way you can make people feel comfortable being themselves." },
      { id: "app-7", text: "And simply… you being Farha. 🌷" },
    ],
  },

  // -------------------------------------------------------------
  // 📸 SCREEN 5: SECOND PHOTO SCRAPBOOK MOMENT
  // -------------------------------------------------------------
  photo2Section: {
    title: "And then there’s just… you. 🌷",
    subtitle: "You are Awesome.",
  },

  // -------------------------------------------------------------
  // 🥹 SCREEN 6: THANK-YOU MESSAGES
  // -------------------------------------------------------------
  thankYou: {
    title: "Things I Probably Don't Say Enough… 💗",
    messages: [
      {
        id: "ty-1",
        text: "Thank you for being there during my bad times, even when I didn't know how to explain what I was feeling.",
      },
      {
        id: "ty-2",
        text: "Thank you for listening when I just needed someone to hear me Thankyou Thanyou Thankyou.......",
      },
      {
        id: "ty-3",
        text: "Thank you for motivating me when I started doubting myself.",
      },
      {
        id: "ty-4",
        text: "Thank you for every random conversation that somehow made a bad day feel better.",
      },
      {
        id: "ty-5",
        text: "Thank you for making me laugh when I didn't really feel like smiling.....",
      },
      {
        id: "ty-6",
        text: "Thank you for all the little things you probably don't even realize meant a lot to me......",
      },
    ],
    highlightTitle: "Most importantly…",
    highlightText: "Thank you for simply being there, Farha. You may not realize how much your presence has meant to me, but I'm genuinely grateful for you.... ❤️",
  },

  // -------------------------------------------------------------
  // 🎂 SCREEN 7: CAKE BUILD-UP
  // -------------------------------------------------------------
  cakeIntro: {
    transitionText: "Okay Farha Madam… enough emotional stuff...Hahahaha. 👀",
    buildUpText: "There's still one important thing missing…",
    cakeRevealText: "YOUR BIRTHDAY CAKE 🎂🌸",
  },

  // -------------------------------------------------------------
  // 🎂 SCREEN 8 & 9: INTERACTIVE CAKE & CUTTING
  // -------------------------------------------------------------
  cake: {
    wishPrompt: "Make a Wish, Farha...✨",
    wishButtonText: "Make Your Wish..🌸",
    blowOutMessage: "Okay… now we cut the cake. 🎂😭",
    cutButtonText: "Cut the Cake 💗",
    postCutTitle: "HAPPY BIRTHDAY, FARHA! 🎂🌸❤️",
    postCutSubtitle: "Okay… NOW it's officially your birthday...YAYYYY. 😌😂",
  },

  // -------------------------------------------------------------
  // 💌 SCREEN 10: PERSONAL BIRTHDAY LETTER
  // -------------------------------------------------------------
  letter: {
    title: "A Little Message For You, Farha 💗",
    salutation: "Dear Farha,",
    paragraphs: [
      "Happy Birthday! ❤️",
      "I don't know if I can put everything I want to say into words, but I'm genuinely grateful that you became a part of my life. From random conversations and silly moments to the little things that somehow became good memories, I'm thankful for all of it.",
      "Thank you for being there during the bad times, for listening when I needed someone, and for motivating me whenever I started doubting myself. You probably don't realize how much those little things have meant to me.",
      "You deserve a year filled with happiness, peace, beautiful memories, and people who genuinely care about you.",
      "So keep smiling, keep being the amazing person you are, and please don't change the things that make you, you.",
      "Once again, Happy Birthday, Farha. 🌸❤️",
    ],
    closingRemark: "And yes… Farha deserves the best birthday. No arguments. 😌😂",
  },

  // -------------------------------------------------------------
  // 💌 SCREEN 11: SECRET ENVELOPE
  // -------------------------------------------------------------
  secretEnvelope: {
    title: "Farha… One Last Thing 👀",
    buttonText: "Open It...💌",
    message: "No matter where life takes us, I hope you always have reasons to smile.\n\nAnd whenever you feel like you need someone to talk to…\n\nJust remember, I'll always be happy to listen. ❤️🌸",
  },

  // -------------------------------------------------------------
  // 🌸 SCREEN 12: CONSIDER THIS WEBSITE AS A GIFT
  // -------------------------------------------------------------
  giftText: {
    message: "Consider this website as a gift 🌸",
    subtext: "No wrapped boxes or ribbons—just memories, genuine words, and a little piece of Effort created especially for you....",
  },

  // -------------------------------------------------------------
  // 🌸 SCREEN 13: FINAL BIRTHDAY SCENE
  // -------------------------------------------------------------
  finalScene: {
    mainHeading: "Happy Birthday, Farha! 🎂🌸❤️",
    wishes: "May this year bring you more happiness than you expect, more memories than you can count, and countless reasons to smile....",
    keepSmiling: "Stay happy. Stay you. And keep that beautiful smile. ❤️",
    madeWithLove: "Made with a little effort… and a lot of care. 🌸",
    signature: "— Your best friend, Adith ❤️",
  },
};
