export type Language = 'ar' | 'en';

import { EGYPTIAN_AR_TRANSLATIONS } from './egyptianTranslations';

export interface SiteContent {
  recipientName: string;
  playfulNickname: string;
  senderName: string;

  // Translate toggle labels
  translateButtonLabel: string;
  translateButtonAria: string;

  // Intro Loader (Screen 0)
  introLoader: {
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
    skip: string;
  };

  // Screen 1: Opening
  opening: {
    greeting: string;
    subheading: string;
    ctaText: string;
    badge: string;
  };

  // Screen 2: Welcome
  welcome: {
    badge: string;
    title: string;
    intro: string;
    instruction: string;
    scrollHint: string;
  };

  // Screen 3: Photo 1
  photo1Section: {
    captionTitle: string;
    captionSubtitle: string;
    memoryBadge: string;
    fallbackTitle: string;
    fallbackSubtitle: string;
  };

  // NEW: Our Little Internet Story
  internetStory: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Array<{
      id: string;
      title: string;
      desc: string;
      icon: string;
    }>;
  };

  // Screen 4: Appreciation
  appreciation: {
    badge: string;
    title: string;
    tapToRevealHint: string;
    cards: Array<{
      id: string;
      text: string;
      extra?: string;
    }>;
  };

  // Screen 5: Photo 2
  photo2Section: {
    title: string;
    subtitle: string;
    scrapbookTag: string;
    fallbackTitle: string;
    fallbackSubtitle: string;
  };

  // Photo 3: Lotus Grace & Radiance
  photo3Section: {
    badge: string;
    title: string;
    subtitle: string;
    quote: string;
    fallbackTitle: string;
    fallbackSubtitle: string;
  };

  // NEW: Things I've Learned About Farha
  thingsLearned: {
    badge: string;
    title: string;
    tapHint: string;
    items: Array<{
      id: string;
      tag: string;
      teaser: string;
      reveal: string;
      emoji: string;
    }>;
  };

  // NEW: Across the Distance
  acrossDistance: {
    badge: string;
    title: string;
    indiaLabel: string;
    egyptLabel: string;
    milesApart: string;
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    note: string;
  };

  // NEW: Even Without Meeting
  evenWithoutMeeting: {
    badge: string;
    title: string;
    lines: string[];
    closing: string;
  };

  // Screen 6: Thank You
  thankYou: {
    badge: string;
    title: string;
    messages: Array<{ id: string; text: string }>;
    highlightTitle: string;
    highlightText: string;
  };

  // Screen 7: Cake Build-Up
  cakeIntro: {
    transitionText: string;
    buildUpText: string;
    revealButton: string;
    traditionBadge: string;
    clickHereInstruction: string;
  };

  // Screen 8 & 9: Cake & Cutting
  cake: {
    wishPrompt: string;
    wishButtonText: string;
    tapCakeHint: string;
    wishingStatus: string;
    blowingCandles: string;
    candleOutWishRevealed: string;
    candlesOutPrompt: string;
    cutButtonText: string;
    cuttingStatus: string;
    cutCakeTitle: string;
    yayTitle: string;
    postCutTitle: string;
    postCutSubtitle: string;
    scrollDownHint: string;
    happyBirthdayFallback: string;
  };

  // Screen 10: Birthday Letter
  letter: {
    badge: string;
    title: string;
    salutation: string;
    paragraphs: string[];
    closingRemark: string;
    bffBadge: string;
    birthdaySpecialTag: string;
  };

  // Screen 10b: Just Something I Wanted to Keep... (Quiet Memory & Keepsake)
  keepsake: {
    title: string;
    teaser: string;
    openButton: string;
    lines: string[];
    finalHeartQuote: string;
  };

  // Screen 11: Secret Envelope
  secretEnvelope: {
    preBuildup: string;
    title: string;
    buttonText: string;
    message: string;
    sealTag: string;
    footerNote: string;
  };

  // Screen 12: Consider This Website As A Gift
  giftText: {
    message: string;
    subtext: string;
    forFarhaTag: string;
  };

  // Screen 13: Final Scene
  finalScene: {
    mainHeading: string;
    wishes: string;
    keepSmiling: string;
    bestWishesDistance: string;
    makeAWishButton: string;
    wishCelebratedTitle: string;
    wishCelebratedMessage: string;
    madeWithLove: string;
    signature: string;
    replayButton: string;
  };

  // Music Player
  musicPlayer: {
    farhaSong: string;
    song1: string;
    song2: string;
    switchSong: string;
    muted: string;
    tapToPlay: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteContent> = {
  // =========================================================================
  // 🇪🇬 EGYPTIAN ARABIC (Default Language)
  // =========================================================================
  ar: EGYPTIAN_AR_TRANSLATIONS,

  // =========================================================================
  // 🇬🇧 ENGLISH
  // =========================================================================
  en: {
    recipientName: 'Farha',
    playfulNickname: 'Farha Madam',
    senderName: 'Adith',

    translateButtonLabel: 'Translate to Egyptian Arabic 🇪🇬',
    translateButtonAria: 'Switch language to Egyptian Arabic',

    introLoader: {
      step1: 'Preparing something special for Farha… 🎀',
      step2: 'Adding a little pink… 🌸',
      step3: 'Adding some birthday magic… ✨',
      step4: 'Almost ready… 💖',
      step5: "Okay… let's begin. 💗",
      skip: 'Skip',
    },

    opening: {
      greeting: 'Hey Farha… 🌸',
      subheading: 'I made something for you.',
      ctaText: 'Open Your Surprise 💗',
      badge: 'A Birthday Surprise for Farha',
    },

    welcome: {
      badge: 'A Best Friend’s Surprise',
      title: 'Welcome, Farha 💗',
      intro: 'Okay Farha… your little birthday surprise officially starts here... 😌🌸',
      instruction: 'Scroll slowly... I actually put some effort into this...',
      scrollHint: 'Keep scrolling',
    },

    photo1Section: {
      captionTitle: 'That Eyes. ❤️',
      captionSubtitle: 'Honestly, you make this too easy. 😌🌸',
      memoryBadge: 'Memory',
      fallbackTitle: 'Photo 1 (Farha)',
      fallbackSubtitle: 'Place your file at /public/photo1.jpg',
    },

    internetStory: {
      badge: 'How It All Started 🌍',
      title: 'Our Little Internet Story 🌍',
      subtitle: 'How two strangers across different countries somehow became best friends.',
      steps: [
        {
          id: 'step-1',
          title: 'Somewhere on the internet… 🌍',
          desc: 'Out of billions of people in this world, our paths somehow crossed.',
          icon: 'globe',
        },
        {
          id: 'step-2',
          title: 'We started talking.',
          desc: 'Just casual messages at first, with no expectations or grand plans.',
          icon: 'message',
        },
        {
          id: 'step-3',
          title: 'Random conversations slowly became something I looked forward to.',
          desc: 'Talking about everything and nothing at all, day after day.',
          icon: 'coffee',
        },
        {
          id: 'step-4',
          title: 'Different countries. Different lives. 🇮🇳 🇪🇬',
          desc: 'India, Kerala to Egypt, Alexandria—thousands of miles and time zones apart.',
          icon: 'plane',
        },
        {
          id: 'step-5',
          title: 'And somehow, the internet brought us together.',
          desc: 'Proving that distance means nothing when a bond is genuine.',
          icon: 'sparkles',
        },
        {
          id: 'step-6',
          title: 'Somewhere along the way, you became my bestfriend.',
          desc: 'The person I can always talk to and be completely myself with.',
          icon: 'heart',
        },
        {
          id: 'step-7',
          title: 'And now… it’s your birthday! 🎂💗',
          desc: 'Celebrating you today with all my heart and warmest wishes.',
          icon: 'cake',
        },
      ],
    },

    appreciation: {
      badge: 'From the Heart',
      title: 'A Few Things I Appreciate About You… 🌸',
      tapToRevealHint: 'Tap any card to reveal a note from the heart 💗',
      cards: [
        {
          id: 'app-1',
          text: 'Your smile ❤️',
          extra: 'It genuinely brings warmth to any day. Never let anything take it away. 🌸',
        },
        {
          id: 'app-2',
          text: 'Your kindness 🌸',
          extra: 'A pure and genuine heart that always cares deeply about others.',
        },
        {
          id: 'app-3',
          text: 'Your random conversations and Kids vidoes 😂',
          extra: 'Those hilarious, out-of-the-blue clips that turn a bad day around instantly! 😂',
        },
        {
          id: 'app-4',
          text: 'The way you make ordinary moments memorable ✨',
          extra: 'Even a small, simple check-in turns into a fond memory.',
        },
        {
          id: 'app-5',
          text: 'The way you motivate people around you.',
          extra: 'You believe in others and give them strength even when they doubt themselves.',
        },
        {
          id: 'app-6',
          text: 'The way you can make people feel comfortable being themselves.',
          extra: 'No judgment, no pretenses—just pure comfort, honesty, and safety.',
        },
        {
          id: 'app-7',
          text: 'And simply… you being Farha. 🌷',
          extra: 'The best friend anyone could ask for. Never change who you are.',
        },
      ],
    },

    photo2Section: {
      title: 'And then there’s just… you. 🌷',
      subtitle: 'You are Awesome.',
      scrapbookTag: 'A little moment worth keeping forever',
      fallbackTitle: 'Photo 2 (Scrapbook)',
      fallbackSubtitle: 'Place your file at /public/photo2.jpg',
    },

    photo3Section: {
      badge: 'Lotus Grace & Serenity 🪷',
      title: 'A Soul as Pure as a Lotus 🌸',
      subtitle: 'Graceful, gentle, and bringing calm to everyone around her.',
      quote: '“Some people don’t just brighten the world—they bring peace and warmth to it.”',
      fallbackTitle: 'Photo 3 (Lotus Grace)',
      fallbackSubtitle: 'Place your file at /public/photo3.jpg',
    },

    thingsLearned: {
      badge: 'Special Things 🎀',
      title: 'Things I’ve Learned About Farha 🎀',
      tapHint: 'Tap each card to reveal 🌸',
      items: [
        {
          id: 'tl-1',
          tag: 'Favorite Colors 🌸',
          teaser: 'Her favorite colors in order… 🌸',
          reveal: 'Her favorite colors are in order: Pink, Purple, Blue, then Green! 🌸💜💙💚 (With pink taking the absolute #1 spot 👑, which is why this entire magical world is dressed in soft pink for you! 🎀)',
          emoji: '🌸',
        },
        {
          id: 'tl-2',
          tag: 'Her Laugh 😂',
          teaser: 'A little thing that makes her laugh… 😂',
          reveal: 'Random silly conversations and funny kids videos that brighten up even the dullest days! 😂',
          emoji: '😂',
        },
        {
          id: 'tl-3',
          tag: 'Superpower ✨',
          teaser: 'Her superpower with people around her… ✨',
          reveal: 'She has a natural gift of motivating people when they start doubting themselves, lifting them up with genuine care.',
          emoji: '✨',
        },
        {
          id: 'tl-4',
          tag: 'Her Heart 💗',
          teaser: 'Something genuinely rare about her… 💗',
          reveal: 'Her kindness makes anyone feel instantly comfortable and completely free to be themselves around her.',
          emoji: '💗',
        },
        {
          id: 'tl-5',
          tag: 'Loyalty ❤️',
          teaser: 'Being there when it matters most… ❤️',
          reveal: 'She’s the kind of friend who is there during tough times, listening even when words are hard to find.',
          emoji: '❤️',
        },
        {
          id: 'tl-6',
          tag: 'Birthday Rule 😌',
          teaser: 'One undisputed birthday rule… 😌',
          reveal: 'Farha deserves the absolute best birthday in the entire world. No arguments accepted! 😌😂',
          emoji: '👑',
        },
      ],
    },

    acrossDistance: {
      badge: 'Across The Miles 🌍',
      title: 'Across the Distance 🇮🇳 ✈️ 🇪🇬',
      indiaLabel: 'India, Kerala 🇮🇳',
      egyptLabel: 'Egypt, Alexandria 🇪🇬',
      milesApart: '~4,500 km',
      line1: 'Two people living miles apart…',
      line2: 'Different countries. Different lives.',
      line3: 'But somehow, we became best friends.',
      line4: 'We may not have shared the same place, but we’ve shared conversations, laughs, random thoughts, and little pieces of our lives.',
      note: 'Distance has never had the power to weaken true friendship ❤️',
    },

    evenWithoutMeeting: {
      badge: 'A True Bond 🥹',
      title: 'Even Without Meeting… 🥹',
      lines: [
        'We’ve never met in person.',
        'We don’t have hundreds of photographs together.',
        'We don’t have years of memories sitting next to each other.',
        'But somehow…',
        'You’ve still become someone I genuinely care about.',
        'Somehow, you became my bestfriend.',
        'I’m really glad our paths crossed.',
      ],
      closing: 'Having you in my life is a true blessing, Farha 🌸',
    },

    thankYou: {
      badge: 'True Friendship',
      title: 'Things I Probably Don’t Say Enough… 💗',
      messages: [
        {
          id: 'ty-1',
          text: 'Thank you for being there during my bad times, even when I didn’t know how to explain what I was feeling.',
        },
        {
          id: 'ty-2',
          text: 'Thank you for listening when I just needed someone to hear me Thankyou Thanyou Thankyou.......',
        },
        {
          id: 'ty-3',
          text: 'Thank you for motivating me when I started doubting myself.',
        },
        {
          id: 'ty-4',
          text: 'Thank you for every random conversation that somehow made a bad day feel better.',
        },
        {
          id: 'ty-5',
          text: 'Thank you for making me laugh when I didn’t really feel like smiling.....',
        },
        {
          id: 'ty-6',
          text: 'Thank you for all the little things you probably don’t even realize meant a lot to me......',
        },
      ],
      highlightTitle: 'Most importantly…',
      highlightText:
        'Thank you for simply being there, Farha. You may not realize how much your presence has meant to me, but I’m genuinely grateful for you.... ❤️',
    },

    cakeIntro: {
      transitionText: 'Okay Farha Madam… enough emotional stuff...Hahahaha. 👀',
      buildUpText: 'There’s still one important thing missing…',
      revealButton: 'Reveal It 🎂🌸',
      traditionBadge: 'Birthday Tradition',
      clickHereInstruction: 'Click here 👆',
    },

    cake: {
      wishPrompt: 'Make a Wish, Farha...✨',
      wishButtonText: 'Make Your Wish..🌸',
      tapCakeHint: 'Tap the cake to blow out the candles 🌬️',
      wishingStatus: 'Closing your eyes and making a wish…',
      blowingCandles: 'Blowing out the candles… 🌬️',
      candleOutWishRevealed: 'I hope this year gives you more reasons to smile. 💗',
      candlesOutPrompt: 'Okay… now we cut the cake. 🎂😭',
      cutButtonText: 'Cut the Cake 💗',
      cuttingStatus: 'Cutting the birthday slice… 🎂✨',
      cutCakeTitle: 'Cutting Farha’s birthday cake… 💗',
      yayTitle: 'YAY! Happy Birthday! 🎉',
      postCutTitle: 'HAPPY BIRTHDAY, FARHA! 🎂🌸❤️',
      postCutSubtitle: 'Okay… NOW it’s officially your birthday...YAYYYY. 😌😂',
      scrollDownHint: 'Scroll down for your birthday letter 💌',
      happyBirthdayFallback: 'Happy Birthday, Farha!',
    },

    letter: {
      badge: 'A Letter For You',
      title: 'A Little Message For You, Farha 💗',
      salutation: 'Dear Farha,',
      paragraphs: [
        'Happy Birthday! ❤️',
        'I don’t know if I can put everything I want to say into words, but I’m genuinely grateful that you became a part of my life. I know that I might lose this wonderful friendship one day or life might take us in different directions, so I made this website as a wonderful memory for us. From random conversations and silly moments to the little things that somehow became good memories, I’m thankful for all of it.',
        'Thank you for being there during the bad times, for listening when I needed someone, and for motivating me whenever I started doubting myself. You probably don’t realize how much those little things have meant to me.',
        'You deserve a year filled with happiness, peace, beautiful memories, and people who genuinely care about you.',
        'So keep smiling, keep being the amazing person you are, and please don’t change the things that make you, you.',
        'Once again, Happy Birthday, Farha. 🌸❤️',
      ],
      closingRemark: 'And yes… Farha deserves the best birthday. No arguments. 😌😂',
      bffBadge: 'Best Friends Forever',
      birthdaySpecialTag: 'Birthday Special',
    },

    keepsake: {
      title: 'Just Something I Wanted to Keep… 🎀',
      teaser: 'I know I might lose this wonderful friendship one day… so I made this for a wonderful memory. 💗',
      openButton: 'Open this little thought 🎀',
      lines: [
        'Life has a funny way of changing things.',
        'We don’t know where we’ll be, what we’ll be doing, or how different life might look someday.',
        'Maybe we’ll still be talking just like this, maybe life will become busy and everything will change a little.',
        'I know that I might lose this wonderful friendship one day… so I made this for a wonderful memory.',
        'I don’t really know what the future holds.',
        'But I do know that I’m so happy this friendship happened.',
        'And that’s why I wanted to make this little place for you.',
        'Not because something has to end.',
        'Just because I wanted to keep a small piece of this moment.',
        'A little reminder of the conversations, the laughs, the random talks, and the friendship we have right now.',
        'So someday, if you ever come across this again, I hope you smile and remember this little chapter of our lives.',
        'I’m really glad you became my bestfriend. 💗',
        'Happy Birthday, Farha. 🎀',
      ],
      finalHeartQuote: 'Some moments don’t need to last forever to be special. 💗',
    },

    secretEnvelope: {
      preBuildup: 'Okay… I saved this one for last. 👀💗',
      title: 'Farha… One Last Thing 👀',
      buttonText: 'Open It...💌',
      message:
        'No matter where life takes us, I hope you always have reasons to smile.\n\nAnd whenever you feel like you need someone to talk to…\n\nJust remember, I’ll always be happy to listen. ❤️🌸',
      sealTag: 'For Farha',
      footerNote: 'Always here for you',
    },

    giftText: {
      message: 'Consider this website as a gift 🌸',
      subtext:
        'No wrapped boxes or ribbons—just genuine memories, heartfelt words, and a little piece of effort created especially for you, so we will always have a wonderful memory of our bond....',
      forFarhaTag: 'For Farha',
    },

    finalScene: {
      mainHeading: 'Happy Birthday, Farha! 🎂🌸❤️',
      wishes:
        'May this year bring you more happiness than you expect, more memories than you can count, and countless reasons to smile....',
      keepSmiling: 'Stay happy. Stay you. And keep that beautiful smile. ❤️',
      bestWishesDistance: 'And I hope you always remember that your bestfriend in India, Kerala is wishing you the very best. 🇮🇳 → 🇪🇬',
      makeAWishButton: 'Make a wish ✨',
      wishCelebratedTitle: 'May all your wishes come true! 🌸',
      wishCelebratedMessage: 'Wishing you a year filled with happiness, peace, and smiles ✨💗',
      madeWithLove: 'Made with a little effort… and a lot of care. 🌸',
      signature: '— Your best friend, Adith ❤️',
      replayButton: 'Experience it again 🎀',
    },

    musicPlayer: {
      farhaSong: 'Farha’s Song ♫',
      song1: 'Farha Song',
      song2: 'Farha Song 2',
      switchSong: 'Switch Song',
      muted: 'Muted 🔇',
      tapToPlay: 'Tap to play music 🎵',
    },
  },
};
