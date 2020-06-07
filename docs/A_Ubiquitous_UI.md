#A Ubiquitous UI
`yoo͞-bĭk′wĭ-tas: _Being or existing everywhere_`

#### What's involved in creating one?

## Why?
* the established trinity of Web, Android & iOS is daft
  * (but it's actually not Steve Jobs' fault)
* what about all the [others...](./devices.gif)?
  * 'peak smartphone'..?
  * IoT
* don't conflate Javascript with Web (which is Javascript on the DOM)
* options:
 * hybrid - Electron / Phone Gap / Cordova etc.
 * 'virtual DOM's' - React / React Native / Reactt for Windows!
 * WebView on mobiles
 * maybe java led the way wit Java ME, Java SE, Java EE
 

 ## What
 * UUI
 * application posture? **sovereign** (transient,daemonic, auxiliary)
 * fully responsive, any [form factor](./form_factors.gif)
 * single page app => single page UI
 * progressive disclosure
 * discoverable
   * 'intuitive' === familiarity
* offer and accept __any__ available input
 
 
 ## How
 * svelte plus experimentaton!
 
 ## Demo
 https://svelte-layout.now.sh
 ####Caveat - I have no design training!
 
 1. responsive
    * no scroll bars for initial state
      * if you cannot fit into single screen...
    * either orientation
      * lots of faff vertical vs horizontal
      * use of overlays and opacity instead
    * **LESSON #1**: live within your real estate (lesson from TB)
    * **LESSON #2**: progressive disclosure
 1. Gestures
    * easy switching
    * drag fine but swipe much better
    * spectrum: mouse > touch pad > touch screen
    * spectrum: hover > click > drag > pinch
    * multi-input - user decides!
    * wild west (no reliable library)
    * **LESSON #3**: discipline: hierachy 
    * **LESSON #4**: roll your own
1. Purpose
    * functionality vs bling
    * what scale, prevent user getting lost  
    * animate changes / transitions
      * product appearance
      * y axis labels
    * **LESSON #5**: what helps user as opposed to what wows them (as opposed to what wows the dev)
1. Discoverable
   * help system
   * minimal vs distracting 
   * single orange element - does not work for touch
    * **LESSON #6**: 'active' (discoverable) vs 'passive' (familiarity)
    * **LESSON #7**: hard - no solution for touch-first interfaces yet 
1. Finally: Elephant in the room
    * a conversational interface
