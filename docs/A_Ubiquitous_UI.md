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
 * 'virtual DOM's' - React / Rect Native / Reactt for Windows!
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
 1. I vs O
    * easy switching
    * drag fine but swipe much better
 1. Gestures
    * spectrum: mouse > touch pad > touch screen
    * spectrum: hover > click > drag > pinch
    * multi-input - user decides!
    * wild west (no reliable library)
    * discipline - heirarchy
      * what is swipe for?
1. Purpose
    * functionality vs bling
    * what scale, prevent user getting lost  
1. Discoverable
   * help system
   * minimal vs distracting 
   * single orange element - does not work for touch
1. Elephant in the room
    * a conversational interface
